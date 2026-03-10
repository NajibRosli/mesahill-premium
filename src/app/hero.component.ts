import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero" class="relative min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy-hover to-brand-navy flex flex-col justify-center items-center text-center text-white px-6 py-16 sm:py-24">
      <div class="max-w-3xl mb-20">
        <div class="text-xs sm:text-sm font-semibold tracking-widest opacity-70 mb-5">MESAHILL PREMIER COLLECTION · NILAI, NEGERI SEMBILAN</div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">Premium Homestay Near KLIA with Infinity Pool &amp; Sky-View Deck</h1>
        <p class="text-lg sm:text-xl opacity-95 leading-relaxed mb-4">
          Welcome to MesaHill Premier Sky-View Suite — a stylish 2-bedroom serviced apartment in Nilai
          with a rooftop sky deck, 30-metre infinity pool, and direct access to MesaMall.
          Just 15 minutes from KLIA/KLIA2 and minutes from USIM &amp; INTI University.
          Your perfect short-term stay in Negeri Sembilan.
        </p>
        <p class="text-base sm:text-lg opacity-80 mb-10 tracking-wide">4 Guests · 2 Bedrooms · 3 Beds · Level 20+ · Pool &amp; Gym Access · Free Parking</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a href="#gallery" class="btn btn-primary" (click)="scrollToSection('gallery', $event)">View Gallery</a>
           <!--<a href="tel:+60123064855" class="btn btn-secondary">Contact Host</a> -->
        </div>

        <!-- Book Now Platforms -->
        <div class="mt-10">
          <p class="text-xs font-semibold tracking-widest opacity-60 mb-4">BOOK YOUR STAY</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="https://www.airbnb.com/rooms/1627416696824647108?unique_share_id=11bd14eb-a082-4a80-b1f3-1ac954160506&viralityEntryPoint=1&s=76&source_impression_id=p3_1772676717_P3UKo8G1zlEIlDtw"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-[#FF5A5F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04e52] transition-colors duration-300 text-sm"
              aria-label="Book on Airbnb"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.667c-.416.87-1.282 1.392-2.24 1.392-.332 0-.66-.064-.976-.192-.608-.24-1.124-.66-1.596-1.168-.472.508-.988.928-1.596 1.168-.316.128-.644.192-.976.192-.958 0-1.824-.522-2.24-1.392-.676-1.412-.096-3.264 1.596-5.104.884-.96 1.904-1.768 2.816-2.312.148-.088.32-.136.4-.136s.252.048.4.136c.912.544 1.932 1.352 2.816 2.312 1.692 1.84 2.272 3.692 1.596 5.104z"/></svg>
              Airbnb
            </a>
            <!-- <a
              href="https://www.booking.com/Share-V2VTTJT"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-[#003580] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00264d] transition-colors duration-300 text-sm"
              aria-label="Book on Booking.com"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 2h20v20H2V2zm10.16 14.04c1.27 0 2.18-.44 2.74-1.08v.88h2.1V9.6h-2.1v.84c-.56-.64-1.47-1.04-2.74-1.04-2.14 0-3.86 1.68-3.86 3.82s1.72 3.82 3.86 3.82zm.34-5.74c1.2 0 2.14.88 2.14 1.92s-.94 1.92-2.14 1.92-2.14-.88-2.14-1.92.94-1.92 2.14-1.92z"/></svg>
              Booking.com
            </a>
            <a
              href="https://www.agoda.com/sp/TqWrZ6BG5y5"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-[#5392f9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3d7de0] transition-colors duration-300 text-sm"
              aria-label="Book on Agoda"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">A</text></svg>
              Agoda
            </a> -->
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div class="text-2xl text-white opacity-70 bounce-chevron">⌄</div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
