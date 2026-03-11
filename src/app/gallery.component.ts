import { Component, signal, computed, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GalleryImage {
  id: number;
  filename: string;
  alt: string;
}

interface GalleryConfig {
  baseUrl: string;
  images: GalleryImage[];
}

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="gallery" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Photo Gallery</h2>
          <p class="text-lg text-brand-text-muted mt-4">Explore the Sky-View Suite</p>
        </div>

        @if (images().length > 0) {
          <!-- Main Image Carousel -->
          <div class="mb-8">
            <div class="relative bg-black rounded-lg overflow-hidden" style="aspect-ratio: 16/9;">
              <img
                [src]="baseUrl() + currentImage()!.filename"
                [alt]="currentImage()!.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />

              <!-- Navigation Arrows -->
              <button
                (click)="previousImage()"
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 group"
                aria-label="Previous image"
              >
                <span class="text-2xl">❮</span>
              </button>
              <button
                (click)="nextImage()"
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
                aria-label="Next image"
              >
                <span class="text-2xl">❯</span>
              </button>

              <!-- Image Counter -->
              <div class="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {{ currentImageIndex() + 1 }} / {{ images().length }}
              </div>
            </div>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="flex gap-3 overflow-x-auto p-2 scrollbar-thin">
            @for (image of images(); track image.id; let i = $index) {
              <button
                (click)="goToImage(i)"
                [class.ring-4]="currentImageIndex() === i"
                [class.ring-brand-navy]="currentImageIndex() === i"
                class="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-navy transition-all duration-300"
                [attr.aria-label]="'Go to image ' + (i + 1) + ': ' + image.alt"
              >
                <img
                  [src]="baseUrl() + image.filename"
                  [alt]="image.alt"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </button>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .scrollbar-thin::-webkit-scrollbar { height: 4px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }
    .scrollbar-thin { scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.2) transparent; }
  `]
})
export class GalleryComponent implements OnInit {
  private readonly http = inject(HttpClient);

  currentImageIndex = signal(0);
  images = signal<GalleryImage[]>([]);
  baseUrl = signal('https://a0.muscache.com/im/pictures/hosting/Hosting-1627416696824647108/original/');

  currentImage = computed(() => this.images()[this.currentImageIndex()]);

  ngOnInit(): void {
    this.http.get<GalleryConfig>('assets/gallery-images.json').subscribe({
      next: (config) => {
        this.baseUrl.set(config.baseUrl);
        this.images.set(config.images);
      },
      error: () => {
        // Fallback: keep empty — images won't render
        console.warn('Could not load gallery-images.json');
      }
    });
  }

  nextImage(): void {
    this.currentImageIndex.update((i) => (i + 1) % this.images().length);
  }

  previousImage(): void {
    this.currentImageIndex.update((i) => (i - 1 + this.images().length) % this.images().length);
  }

  goToImage(index: number): void {
    this.currentImageIndex.set(index);
  }
}
