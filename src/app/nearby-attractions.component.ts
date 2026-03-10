import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface Place {
  icon: string;
  name: string;
  type: string;
  distance: string;
  description: string;
  mapLink?: string;
}

@Component({
  selector: 'app-nearby-attractions',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="nearby" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Nearby Attractions</h2>
          <p class="text-lg text-brand-text-muted mt-4">Explore popular places around Nilai</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let place of places"
            class="bg-brand-beige rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
            appScrollReveal
          >
            <div class="flex items-start gap-4">
              <div class="text-4xl flex-shrink-0">{{ place.icon }}</div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-brand-text mb-1">{{ place.name }}</h3>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-semibold px-2 py-1 bg-brand-navy/10 text-brand-navy rounded-full">{{ place.type }}</span>
                  <span class="text-xs text-brand-text-muted">{{ place.distance }}</span>
                </div>
                <p class="text-sm text-brand-text-muted leading-relaxed">{{ place.description }}</p>
                <a
                  *ngIf="place.mapLink"
                  [href]="place.mapLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block mt-3 text-xs font-semibold text-brand-navy hover:text-brand-navy-hover transition-colors duration-300"
                >
                  View on Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class NearbyAttractionsComponent {
  places: Place[] = [
    // Dining & Cafes
    {
      icon: '🍽️',
      name: 'Nilai Megamall Food Court',
      type: 'Dining',
      distance: '~3 km',
      description: 'Wide variety of local and international cuisine options in a modern setting.'
    },
    {
      icon: '☕',
      name: 'The Coffee House Nilai',
      type: 'Cafe',
      distance: '~2 km',
      description: 'Cozy cafe serving specialty coffee, pastries, and light meals.'
    },
    {
      icon: '🍜',
      name: 'Restoran Nilai Jaya',
      type: 'Restaurant',
      distance: '~1.5 km',
      description: 'Popular local restaurant serving authentic Malaysian cuisine and seafood.'
    },

    // Shopping & Retail
    {
      icon: '🛍️',
      name: 'Nilai Megamall',
      type: 'Shopping Center',
      distance: '~3 km',
      description: 'Large shopping mall with diverse brands, dining, and entertainment options.'
    },
    {
      icon: '🏪',
      name: 'Sentosa Greenland Mall',
      type: 'Shopping Center',
      distance: '~5 km',
      description: 'Premium shopping destination featuring international brands and restaurants.'
    },
    {
      icon: '🛒',
      name: 'Mydin Shopping Centre',
      type: 'Hypermarket',
      distance: '~2 km',
      description: 'One-stop shopping destination for groceries, household items, and daily essentials.'
    },

    // Recreation & Entertainment
    {
      icon: '🎬',
      name: 'TGV Cinemas Nilai',
      type: 'Entertainment',
      distance: '~3.5 km',
      description: 'Modern cinema with latest movies and comfortable viewing experience.'
    },
    {
      icon: '🏋️',
      name: 'Fitness First Nilai',
      type: 'Gym & Wellness',
      distance: '~2.5 km',
      description: 'Well-equipped gym facility with modern equipment and fitness classes.'
    },
    {
      icon: '🌳',
      name: 'Nilai Spring Golf & Country Club',
      type: 'Recreation',
      distance: '~6 km',
      description: 'Beautiful golf course and country club with dining and recreational facilities.'
    },

    // Healthcare & Services
    {
      icon: '🏥',
      name: 'Nilai Medical Centre',
      type: 'Healthcare',
      distance: '~2 km',
      description: 'Private medical facility providing quality healthcare services and consultation.'
    },
    {
      icon: '💇',
      name: 'Salon & Spa Nilai',
      type: 'Wellness',
      distance: '~1.5 km',
      description: 'Professional salon and spa services for relaxation and grooming.'
    },

    // Attractions & Culture
    {
      icon: '🏛️',
      name: 'Nilai Police Museum',
      type: 'Cultural Site',
      distance: '~4 km',
      description: 'Interesting museum showcasing the history and heritage of Malaysian police.'
    },
    {
      icon: '🕌',
      name: 'Masjid Nilai Al-Falah',
      type: 'Religious Site',
      distance: '~2.5 km',
      description: 'Beautiful mosque serving the local community with modern facilities.'
    },
    {
      icon: '🌊',
      name: 'Seremban Wet Lands',
      type: 'Nature Reserve',
      distance: '~8 km',
      description: 'Scenic wetland area perfect for nature walks, bird watching, and photography.'
    },
    {
      icon: '🎪',
      name: 'A Famosa Resort Melaka',
      type: 'Resort & Entertainment',
      distance: '~25 km',
      description: 'Theme park and resort with rides, water sports, and family entertainment.'
    }
  ];
}
