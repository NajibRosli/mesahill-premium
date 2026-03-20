import { Injectable, signal, inject } from '@angular/core';

export type BackgroundColor = 'light' | 'dark' | 'navy' | 'beige';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {
  currentBackgroundColor = signal<BackgroundColor>('light');

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver(): void {
    const sectionColors: Record<string, BackgroundColor> = {
      'hero': 'navy',
      'gallery': 'light',
      'specs': 'light',
      'amenities': 'beige',
      'reviews': 'light',
      'checkin': 'beige',
      'rules': 'light',
      'facilities': 'beige',
      'faq': 'light',
      'location': 'beige'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let maxVisible = 0;
        let dominantSection: BackgroundColor = 'light';

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const color = sectionColors[sectionId];
            
            // Calculate visibility ratio
            const visibilityRatio = entry.intersectionRatio;
            if (visibilityRatio > maxVisible && color) {
              maxVisible = visibilityRatio;
              dominantSection = color;
            }
          }
        });

        if (maxVisible > 0) {
          this.currentBackgroundColor.set(dominantSection);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[id="hero"], [id="gallery"], [id="specs"], [id="amenities"], [id="reviews"], [id="checkin"], [id="rules"], [id="facilities"], [id="faq"], [id="location"]');
    sections.forEach((section) => observer.observe(section));
  }
}
