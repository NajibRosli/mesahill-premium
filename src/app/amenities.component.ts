import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface Amenity {
  icon: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="amenities" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Amenities & Features</h2>
          <p class="text-lg text-brand-text-muted mt-4">Everything you need for a comfortable stay</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let amenity of amenities"
            class="bg-white rounded-lg shadow-sm p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
            appScrollReveal
          >
            <div class="flex items-start gap-4">
              <div class="text-4xl flex-shrink-0">{{ amenity.icon }}</div>
              <div>
                <h3 class="text-lg font-bold text-brand-text mb-2">{{ amenity.name }}</h3>
                <p class="text-sm text-brand-text-muted leading-relaxed">{{ amenity.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AmenitiesComponent {
  amenities: Amenity[] = [
    // Kitchen & Dining
    { icon: '🍳', name: 'Full Kitchen', desc: 'Fully equipped with modern appliances and cooking essentials' },
    { icon: '🍽️', name: 'Dining Table', desc: 'Comfortable dining space for guests' },
    { icon: '🧊', name: 'Refrigerator', desc: 'Full-size refrigerator for food storage' },
    { icon: '🥘', name: 'Cooking Basics', desc: 'Utensils, pots, pans, and seasonings provided' },

    // Bedroom & Comfort
    { icon: '🛏️', name: 'Comfortable Beds', desc: 'Queen bed, single bed, and an extra single bed — sleeps up to 4 guests' },
    { icon: '🛋️', name: 'Living Area', desc: 'Spacious and well-furnished living room' },
    { icon: '📺', name: 'Smart TV', desc: 'Entertainment system for your relaxation' },
    { icon: '❄️', name: 'Air Conditioning', desc: 'Central AC with individual room controls' },
    { icon: '🪴', name: 'Ceiling Fans', desc: 'Additional cooling options in each room' },

    // Bathroom
    { icon: '🚿', name: 'Modern Bathrooms', desc: '2 fully equipped bathrooms with hot water' },
    { icon: '🚽', name: 'Bidet', desc: 'Modern bidet fixtures for comfort' },
    { icon: '🧴', name: 'Amenities', desc: 'Bath essentials and toiletries provided' },

    // Living & Entertainment
    { icon: '📶', name: 'High-Speed WiFi', desc: 'Reliable internet connectivity throughout' },
    { icon: '🧺', name: 'Washer & Dryer', desc: 'In-unit laundry facilities' },
    { icon: '🪜', name: 'Hangers', desc: 'Plenty of hangers for your wardrobe' },
    { icon: '👔', name: 'Iron & Ironing Board', desc: 'Iron and ironing board provided to keep your clothes wrinkle-free' },
    { icon: '🧻', name: 'Bed Linens', desc: 'Fresh, high-quality linens for comfort' },

    // Facilities Access
    { icon: '🏊', name: 'Infinity Pool', desc: 'Exclusive access to stunning rooftop pool' },
    { icon: '🏋️', name: 'Gym Facility', desc: 'On-site fitness center for guests' },
    { icon: '🌅', name: 'Rooftop Sky Deck', desc: 'Panoramic views and outdoor seating' },
    { icon: '🅿️', name: 'Parking Space', desc: '1 dedicated car parking space included' }
  ];
}
