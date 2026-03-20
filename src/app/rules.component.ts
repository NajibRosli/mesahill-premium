import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="rules" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold">House Rules</h2>
          <p class="text-lg text-brand-text-muted mt-4">Important guidelines to ensure a pleasant stay for everyone</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Rules Card 1 -->
          <div class="card card-dark" appScrollReveal>
            <div class="text-4xl mb-6">🚭</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">No Smoking, Pets, or Parties</h3>
            <ul class="text-brand-text-muted space-y-2 mb-4 text-sm">
              <li class="flex items-start gap-2"><span>•</span> No smoking or e-cigarettes anywhere on property</li>
              <li class="flex items-start gap-2"><span>•</span> No pets allowed</li>
              <li class="flex items-start gap-2"><span>•</span> No parties or gathering events</li>
              <li class="flex items-start gap-2"><span>•</span> No strong odors or cooking that creates odors</li>
            </ul>
            <div class="alert">
              <div class="text-2xl mb-4">⚠️</div>
              <p class="m-0 text-sm font-semibold text-brand-error">Violations incur RM500 penalty</p>
            </div>
          </div>

          <!-- Rules Card 2 -->
          <div class="card card-dark" appScrollReveal>
            <div class="text-4xl mb-6">🌙</div>
            <h3 class="text-2xl font-bold mb-4 text-brand-text">Quiet Hours & Conduct</h3>
            <ul class="text-brand-text-muted space-y-2 mb-4 text-sm">
              <li class="flex items-start gap-2"><span>•</span> Quiet hours: 11:00 PM – 7:00 AM</li>
              <li class="flex items-start gap-2"><span>•</span> Respect noise levels during quiet hours</li>
              <li class="flex items-start gap-2"><span>•</span> Maximum 4 guests at all times</li>
              <li class="flex items-start gap-2"><span>•</span> Self check-in via lockbox</li>
            </ul>
            <div class="alert">
              <div class="text-2xl mb-4">ℹ️</div>
              <p class="m-0 text-sm">Commercial photography is permitted with prior approval</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class RulesComponent {}
