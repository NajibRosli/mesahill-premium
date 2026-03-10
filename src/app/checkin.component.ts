import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="checkin" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Arrival & Departure</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6">🕒</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Check-In</h3>
            <div class="badge">From 3:00 PM</div>
            <p class="text-brand-text-muted">Early check-in may be arranged subject to availability — please message us in advance.</p>
          </div>
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6">🚪</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Check-Out</h3>
            <div class="badge">By 12:00 PM</div>
            <p class="text-brand-text-muted">Late check-out subject to availability and may incur a fee. Confirm the night before.</p>
          </div>
          <div class="card" appScrollReveal>
            <div class="text-5xl mb-6">🔑</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Contactless Arrival</h3>
            <p class="text-brand-text-muted">Key codes and directions will be sent prior to arrival. For personalised assistance, contact our host team.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CheckinComponent {}
