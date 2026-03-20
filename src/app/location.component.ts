import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="location" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Location</h2>
          <p class="text-lg text-brand-text-muted mt-4">Find us at Mesahill Premier, Nilai</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8" appScrollReveal>
          <!-- Map -->
          <div class="rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.971720772974!2d101.77414327567624!3d2.824383155061715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc7837680f24b%3A0x73d94fc976ff75ed!2sMesahill%20Premier%20Sky-View%20Homestay%20%40%20MesaMall%20%7C%20Near%20KLIA%202%20%26%20Sepang%20%5B%20Wifi%20%26%20Car%20Park%20%5D!5e0!3m2!1sen!2sus!4v1773994604358!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <!-- Location Details -->
          <div class="flex flex-col justify-center">
            <div class="mb-8">
              <h3 class="text-2xl font-display font-bold text-brand-text mb-4">📍 Address</h3>
              <p class="text-lg text-brand-text-muted leading-relaxed">
                Mesahill Premier Sky-View Suite<br>
                Nilai, Negeri Sembilan<br>
                Malaysia
              </p>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-display font-bold text-brand-text mb-4">🚗 Getting There</h3>
              <ul class="text-brand-text-muted space-y-3">
                <li class="flex items-start">
                  <span class="mr-3">✓</span>
                  <span><strong>From KLIA/KLIA2:</strong> 24 minutes drive</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3">✓</span>
                  <span><strong>From Kuala Lumpur:</strong> 45 minutes drive</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3">✓</span>
                  <span><strong>From USIM:</strong> 10 minutes drive</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3">✓</span>
                  <span><strong>From MesaMall:</strong> Direct access</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="https://maps.app.goo.gl/aZ41ktFH8qR6n4Au8"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LocationComponent {}
