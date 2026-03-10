import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-sustainability',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="sustainability" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Energy & Comfort</h2>
          <p class="text-lg text-brand-text-muted mt-4">We maintain hotel-level comfort while promoting responsible energy use.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-md shadow-sm p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" appScrollReveal>
            <div class="text-5xl mb-6">💡</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-navy">When You Leave</h3>
            <p class="text-brand-text-muted">Switch A/C to ECO mode or turn it off. Turn off all lights. Small actions significantly reduce energy consumption.</p>
          </div>
          <div class="bg-white rounded-md shadow-sm p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" appScrollReveal>
            <div class="text-5xl mb-6">🌿</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-navy">Linens & Towels</h3>
            <p class="text-brand-text-muted">Re-use towels to support sustainable housekeeping. Fresh linens provided per stay on request.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SustainabilityComponent {}
