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
              class="bg-brand-beige rounded-lg shadow-sm p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
              appScrollReveal
            >
              <!-- Header with avatar, author, and rating -->
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-brand-text">{{ review.author }}</h3>
                  <p class="text-sm text-brand-text-muted">{{ review.date }}</p>
                </div>
              </div>

              <!-- Star Rating -->
              <div class="flex items-center gap-1 mb-4">
                @for (i of [1, 2, 3, 4, 5]; track i) {
                  <span class="text-lg" [class.text-gray-300]="i > review.rating">
                    ⭐
                  </span>
                }
              </div>

              <!-- Review Comment -->
              <p class="text-sm text-brand-text-muted leading-relaxed line-clamp-4">
                {{ review.comment }}
              </p>
            </div>
          }
        </div>

        <!-- Show more button -->
        <div class="text-center mt-12">
          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View All Reviews on Airbnb
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
      date: '1 week ago',
      comment:
        'Najib is surely entitled to be given the superhost title as I know we are his first guest and the way he guided us to his place and the response given was very proactive better than an experienced host before. I and my family was very happy and will repeat again surely. Good job hope you get more bookings after this Najib. And to all Najib is one of the best host you can get.'
    },
    {
      id: 2,
      author: 'Kevin',
      rating: 5,
      date: '1 day ago',
      comment:
        'The place was really clean and anything was provided just like mentioned in the description. I would book the place again if I come next time'
    }
  ];
}
