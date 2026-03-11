import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="facilities" class="bg-brand-navy text-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold">Facilities</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card card-dark" appScrollReveal>
            <div class="text-5xl mb-6">🏊</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Infinity Pool</h3>
            <div class="badge bg-brand-navy text-white">7:00 AM – 10:00 PM</div>
            <p class="text-brand-text-muted mb-4">Exclusive to registered guests. Shower before entering. No glassware poolside.</p>
            <ul class="space-y-2 text-brand-text-muted text-sm">
              <li class="flex items-start gap-2"><span class="text-brand-navy">→</span> No diving — shallow entry.</li>
              <li class="flex items-start gap-2"><span class="text-brand-navy">→</span> Not privately lifeguarded — swim at your own risk.</li>
            </ul>
          </div>
          <div class="card card-dark" appScrollReveal>
            <div class="text-5xl mb-6">🌇</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Rooftop Sky Deck</h3>
            <p class="text-brand-text-muted mb-4">Panoramic views with tranquil seating. Perfect for sunrise coffee or evening cocktails.</p>
            <ul class="space-y-2 text-brand-text-muted text-sm">
              <li class="flex items-start gap-2"><span class="text-brand-navy">→</span> Respect posted occupancy limits.</li>
              <li class="flex items-start gap-2"><span class="text-brand-navy">→</span> No open flames or fireworks.</li>
              <li class="flex items-start gap-2"><span class="text-brand-navy">→</span> Report any spills immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FacilitiesComponent {}
