import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-brand-navy text-white py-16 px-6 md:py-20 mt-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-8">
          <!-- About Section -->
          <div>
            <h3 class="text-xl font-display font-bold text-white mb-4">✦ Sky-View Suite at Mesahill Premier</h3>
            <p class="text-sm text-white/90 leading-relaxed">A premier stay designed for relaxation and effortless luxury. Located in Nilai, Negeri Sembilan — just 15 minutes from KLIA/KLIA2.</p>
          </div>

          <!-- Quick Links Section -->
          <div>
            <h4 class="font-display text-base font-semibold mb-6">Quick Links</h4>
            <ul class="grid grid-cols-2 gap-x-8 gap-y-4">
              <li><a href="#gallery" (click)="scrollToSection('gallery', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Gallery</a></li>
              <li><a href="#specs" (click)="scrollToSection('specs', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Features</a></li>
              <li><a href="#amenities" (click)="scrollToSection('amenities', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Amenities</a></li>
              <li><a href="#checkin" (click)="scrollToSection('checkin', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Check-In</a></li>
              <li><a href="#rules" (click)="scrollToSection('rules', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Rules</a></li>
              <li><a href="#facilities" (click)="scrollToSection('facilities', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Facilities</a></li>
              <li><a href="#location" (click)="scrollToSection('location', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">Location</a></li>
              <li><a href="#faq" (click)="scrollToSection('faq', $event)" class="text-white/80 no-underline transition-colors duration-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-8 border-t border-white/10 text-center text-xs text-white/70">
          <p class="m-0">© 2026 Mesahill Premier. All rights reserved.</p>
          <p class="m-0 mt-2">By Najib Rosli</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
