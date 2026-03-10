import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-laundry',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="laundry" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Laundry Care</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6">🫧</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Washer</h3>
            <ul class="space-y-2 text-brand-text-muted">
              <li class="flex items-start gap-2"><span class="text-brand-navy font-bold">✓</span> Cold or warm cycles recommended for most fabrics.</li>
              <li class="flex items-start gap-2"><span class="text-brand-navy font-bold">✓</span> Use mild detergent only — no bleach in the machine.</li>
            </ul>
          </div>
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6">🌀</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Dryer</h3>
            <ul class="space-y-2 text-brand-text-muted">
              <li class="flex items-start gap-2"><span class="text-brand-navy font-bold">✓</span> Remove delicates promptly to avoid over-drying.</li>
              <li class="flex items-start gap-2"><span class="text-brand-navy font-bold">✓</span> Clean the lint trap after each use for safety and efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LaundryComponent {}
