import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="reviews" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Guest Reviews</h2>
          <p class="text-lg text-brand-text-muted mt-4">See what our guests loved about their stay</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (review of reviews; track review.id) {
            <div
              class="bg-gradient-to-br from-brand-beige to-brand-beige/80 rounded-lg shadow-md p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border border-brand-beige/50"
              appScrollReveal
            >
              <!-- Star Rating at top -->
              <div class="flex items-center gap-1 mb-4">
                @for (i of [1, 2, 3, 4, 5]; track i) {
                  <span class="text-xl" [class.text-gray-300]="i > review.rating">
                    ⭐
                  </span>
                }
              </div>

              <!-- Review Comment -->
              <p class="text-sm text-brand-text leading-relaxed mb-6 min-h-20">
                "{{ review.comment }}"
              </p>

              <!-- Author and date -->
              <div class="border-t border-brand-beige pt-4">
                <h3 class="font-bold text-brand-text">{{ review.author }}</h3>
                <p class="text-xs text-brand-text-muted">{{ review.date }}</p>
              </div>
            </div>
          }
        </div>

        <!-- Show more button -->
        <div class="text-center mt-12">
          <a
            href="https://www.airbnb.com/rooms/1627416696824647108?unique_share_id=11bd14eb-a082-4a80-b1f3-1ac954160506&viralityEntryPoint=1&s=76&source_impression_id=p3_1772676717_P3UKo8G1zlEIlDtw"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            ⭐ View All Reviews on Airbnb
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      id: 1,
      author: 'Pravin',
      rating: 5,
      date: '02-03-2026',
      comment:
        'Najib is surely entitled to be given the superhost title as I know we are his first guest and the way he guided us to his place and the response given was very proactive better than an experienced host before. I and my family was very happy and will repeat again surely. Good job hope you get more bookings after this Najib. And to all Najib is one of the best host you can get.'
    },
    {
      id: 2,
      author: 'Kevin',
      rating: 5,
      date: '09-03-2026',
      comment:
        'The place was really clean and anything was provided just like mentioned in the description. I would book the place again if I come next time'
    },
    {
      id: 3,
      author: 'Ee',
      rating: 5,
      date: '20-03-2026',
      comment:
        'Great experience'
    }
  ];
}
