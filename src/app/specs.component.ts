import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface PropertySpec {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-specs',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="specs" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Property Details</h2>
          <p class="text-lg text-brand-text-muted mt-4">Everything you need to know</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div
            *ngFor="let spec of specs"
            class="bg-brand-beige rounded-lg p-8 text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
            appScrollReveal
          >
            <div class="text-5xl mb-4">{{ spec.icon }}</div>
            <h3 class="text-sm font-semibold text-brand-text-muted mb-2">{{ spec.label }}</h3>
            <p class="text-2xl md:text-3xl font-bold text-brand-navy">{{ spec.value }}</p>
          </div>
        </div>

        <!-- Additional Info Cards -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-brand-navy to-brand-navy-hover text-white rounded-lg p-8" appScrollReveal>
            <h3 class="text-2xl font-bold mb-4">✨ Experience</h3>
            <p class="leading-relaxed">Level 20+ with panoramic views, modern amenities, and access to premium facilities including an infinity pool and rooftop sky deck.</p>
          </div>

          <div class="bg-gradient-to-br from-brand-navy to-brand-navy-hover text-white rounded-lg p-8" appScrollReveal>
            <h3 class="text-2xl font-bold mb-4">📍 Location</h3>
            <p class="leading-relaxed">Conveniently located in Nilai, Negeri Sembilan, with easy access to shopping, healthcare, education, and the airport.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SpecsComponent {
  specs: PropertySpec[] = [
    { icon: '👥', label: 'Max Guests', value: '4' },
    { icon: '🛏️', label: 'Bedrooms', value: '2' },
    { icon: '�', label: 'Beds', value: '3' },
    { icon: '�🚿', label: 'Bathrooms', value: '2' },
    { icon: '🅿️', label: 'Parking', value: '1 Space' }
  ];
}
