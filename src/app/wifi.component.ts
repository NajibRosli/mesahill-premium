import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-wifi',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="wifi" class="bg-brand-beige py-20 px-6">
      <div class="max-w-2xl mx-auto flex flex-col items-center text-center">
        <div class="mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Connectivity</h2>
        </div>
        <div class="w-full" appScrollReveal>
          <div class="text-6xl mb-6">🛜</div>
          <p class="text-lg md:text-xl text-brand-text-muted mb-10">High-speed WiFi is complimentary. Network name and password will be provided by the host upon arrival.</p>
          <div class="bg-brand-navy text-white rounded-md p-10">
            <div class="mb-6">
              <p class="m-0 leading-relaxed"><strong class="text-brand-warning">Easy Connection:</strong> Scan the QR code card in the suite to connect instantly.</p>
            </div>
            <div>
              <p class="m-0 leading-relaxed"><strong class="text-brand-warning">Troubleshooting:</strong> Restart your device or message the host for prompt assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class WifiComponent {}
