import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="emergency" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Emergency Info & Host Contacts</h2>
          <p class="text-lg text-brand-text-muted mt-4">Important contact information</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <!-- Host Contacts Card -->
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6 text-center">📞</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text text-center">Host</h3>
            <p class="text-sm text-brand-text-muted italic mb-6 text-center">Immediate help for urgent property issues</p>

            <div class="space-y-4">
              <div class="flex flex-col gap-2">
                <strong class="text-brand-navy">Najib</strong>
                <a href="tel:+60123064855" class="btn btn-call btn-small">+60 123064855</a>
              </div>
              <div class="flex flex-col gap-2">
                <strong class="text-brand-navy">Siti</strong>
                <a href="tel:+60124479459" class="btn btn-call btn-small">+60 124479459</a>
              </div>
            </div>
          </div>

          <!-- Emergency Services Card -->
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6 text-center">🚨</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text text-center">Local Emergency</h3>
            <div class="text-5xl font-bold text-brand-error my-8 text-center">999</div>
            <p class="text-lg font-semibold mb-2 text-brand-text text-center">Emergency Services</p>
            <p class="text-sm text-brand-text-muted text-center">Save this number to your phone upon arrival.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class EmergencyComponent {}
