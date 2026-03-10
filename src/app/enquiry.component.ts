import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { EnquiryService } from './enquiry.service';

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="enquiry" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Get in Touch</h2>
          <p class="text-lg text-brand-text-muted mt-4">Have questions? Send us an enquiry and we'll get back to you soon</p>
        </div>

        <div class="max-w-2xl mx-auto" appScrollReveal>
          <div class="card">
            <form [formGroup]="enquiryForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-semibold text-brand-text mb-2">Name *</label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  [class.border-brand-error]="isFieldInvalid('name')"
                  class="w-full px-4 py-3 rounded-lg border border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-1 transition-all disabled:bg-gray-100"
                  placeholder="Your full name"
                />
                @if (isFieldInvalid('name')) {
                  <p class="text-sm text-brand-error mt-1">
                    @if (enquiryForm.get('name')?.hasError('required')) {
                      Name is required
                    }
                    @if (enquiryForm.get('name')?.hasError('minlength')) {
                      Name must be at least 3 characters
                    }
                  </p>
                }
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-semibold text-brand-text mb-2">Email *</label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  [class.border-brand-error]="isFieldInvalid('email')"
                  class="w-full px-4 py-3 rounded-lg border border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-1 transition-all disabled:bg-gray-100"
                  placeholder="your.email@example.com"
                />
                @if (isFieldInvalid('email')) {
                  <p class="text-sm text-brand-error mt-1">
                    @if (enquiryForm.get('email')?.hasError('required')) {
                      Email is required
                    }
                    @if (enquiryForm.get('email')?.hasError('email')) {
                      Please enter a valid email address
                    }
                  </p>
                }
              </div>

              <!-- Phone Field -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-brand-text mb-2">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  formControlName="phone"
                  [class.border-brand-error]="isFieldInvalid('phone')"
                  class="w-full px-4 py-3 rounded-lg border border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-1 transition-all disabled:bg-gray-100"
                  placeholder="+60 123 4567 890"
                />
                @if (isFieldInvalid('phone')) {
                  <p class="text-sm text-brand-error mt-1">
                    @if (enquiryForm.get('phone')?.hasError('required')) {
                      Phone number is required
                    }
                    @if (enquiryForm.get('phone')?.hasError('pattern')) {
                      Please enter a valid phone number
                    }
                  </p>
                }
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-semibold text-brand-text mb-2">Message *</label>
                <textarea
                  id="message"
                  formControlName="message"
                  [class.border-brand-error]="isFieldInvalid('message')"
                  class="w-full px-4 py-3 rounded-lg border border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-1 transition-all disabled:bg-gray-100 resize-none"
                  rows="5"
                  placeholder="Tell us more about your enquiry..."
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <p class="text-sm text-brand-error mt-1">
                    @if (enquiryForm.get('message')?.hasError('required')) {
                      Message is required
                    }
                    @if (enquiryForm.get('message')?.hasError('minlength')) {
                      Message must be at least 10 characters
                    }
                  </p>
                }
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                [disabled]="enquiryForm.invalid || isSubmitting()"
                class="w-full btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                @if (isSubmitting()) {
                  <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending...</span>
                }
                @if (!isSubmitting()) {
                  <span>Send Enquiry</span>
                }
              </button>
            </form>

            <!-- Success Message -->
            @if (submissionSuccess()) {
              <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeInUp">
                <div class="flex items-start gap-3">
                  <div class="text-2xl">✓</div>
                  <div>
                    <h3 class="font-semibold text-green-800">Thank you for your enquiry!</h3>
                    <p class="text-sm text-green-700 mt-1">We've received your message and will get back to you soon.</p>
                  </div>
                </div>
              </div>
            }

            <!-- Error Message -->
            @if (errorMessage()) {
              <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeInUp">
                <div class="flex items-start gap-3">
                  <div class="text-2xl">⚠️</div>
                  <div>
                    <h3 class="font-semibold text-red-800">Submission failed</h3>
                    <p class="text-sm text-red-700 mt-1">{{ errorMessage() }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class EnquiryComponent {
  private readonly fb = inject(FormBuilder);
  private readonly enquiryService = inject(EnquiryService);

  private readonly RECAPTCHA_SITE_KEY = '6Ld4kYMsAAAAAP8JUjYgZxT53smTWMurTsCyqEFG';

  enquiryForm: FormGroup;
  isSubmitting = signal(false);
  submissionSuccess = signal(false);
  errorMessage = signal('');

  constructor() {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.enquiryForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.enquiryForm.invalid) {
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    this.submissionSuccess.set(false);

    try {
      // Get reCAPTCHA token (optional - for testing)
      let token = 'test-token-disabled';

      try {
        token = await this.generateRecaptchaToken();
      } catch (error) {
        console.warn('reCAPTCHA disabled or unavailable, using test token');
        // Continue with test token
      }

      // Prepare form data
      const formData = {
        ...this.enquiryForm.value,
        recaptchaToken: token
      };

      console.log('Submitting enquiry with data:', formData);

      // Submit to API
      this.enquiryService.submitEnquiry(formData).subscribe({
        next: (response) => {
          console.log('Enquiry submitted successfully:', response);
          this.submissionSuccess.set(true);
          this.enquiryForm.reset();
          this.isSubmitting.set(false);

          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            this.submissionSuccess.set(false);
          }, 5000);
        },
        error: (error) => {
          console.error('API error:', error);
          this.errorMessage.set(error.message);
          this.isSubmitting.set(false);
        }
      });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Submission failed. Please try again.';
      console.error('Enquiry submission error:', error);
      this.errorMessage.set(errorMsg);
      this.isSubmitting.set(false);
    }
  }

  private generateRecaptchaToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Wait for grecaptcha to be available (with timeout)
      let attempts = 0;
      const maxAttempts = 30; // 3 seconds with 100ms intervals

      const checkGreecaptcha = () => {
        if (window.grecaptcha && window.grecaptcha.execute) {
          window.grecaptcha
            .execute(this.RECAPTCHA_SITE_KEY, { action: 'submit' })
            .then((token) => {
              console.log('reCAPTCHA token generated successfully');
              resolve(token);
            })
            .catch((error) => {
              console.error('reCAPTCHA execution error:', error);
              reject(new Error(`reCAPTCHA error: ${error?.message || 'Unknown error'}`));
            });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkGreecaptcha, 100);
        } else {
          console.error('reCAPTCHA script not loaded after timeout');
          reject(new Error('reCAPTCHA script failed to load. Please refresh the page.'));
        }
      };

      checkGreecaptcha();
    });
  }
}
