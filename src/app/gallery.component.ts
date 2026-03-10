import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="gallery" class="bg-brand-beige py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">Photo Gallery</h2>
          <p class="text-lg text-brand-text-muted mt-4">Explore the Sky-View Suite</p>
        </div>

        <!-- Main Image Carousel -->
        <div class="mb-8">
          <div class="relative bg-black rounded-lg overflow-hidden" style="aspect-ratio: 16/9;">
            <img
              *ngIf="currentImage()"
              [src]="'https://a0.muscache.com/im/pictures/hosting/Hosting-1627416696824647108/original/' + currentImage()!.url"
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
              {{ currentImageIndex() + 1 }} / {{ images.length }}
            </div>
          </div>
        </div>

        <!-- Thumbnail Gallery -->
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <button
            *ngFor="let image of images; let i = index"
            (click)="goToImage(i)"
            [class.ring-4]="currentImageIndex() === i"
            [class.ring-brand-navy]="currentImageIndex() === i"
            class="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-navy transition-all duration-300"
            [attr.aria-label]="'Go to image ' + (i + 1) + ': ' + image.alt"
          >
            <img
              [src]="'https://a0.muscache.com/im/pictures/hosting/Hosting-1627416696824647108/original/' + image.url"
              [alt]="image.alt"
              class="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class GalleryComponent {
  currentImageIndex = signal(0);

  images: GalleryImage[] = [
    { id: 1, url: '7ea0180c-1412-447f-9504-eef3f36edb67.jpeg', alt: 'Living Room View 1' },
    { id: 2, url: '60bbf1b5-9f6f-47a0-b4bd-1e45d7f19e0e.jpeg', alt: 'Living Room View 2' },
    { id: 3, url: '92b6eb4a-630a-496d-8a64-17309b96f1c3.jpeg', alt: 'Living Room View 3' },
    { id: 4, url: '8a8d0982-90e3-4913-aebe-2b3b7f485bd6.jpeg', alt: 'Living Room View 4' },
    { id: 5, url: 'ffed6d85-4880-4b10-b267-642d80a6c57c.jpeg', alt: 'Kitchen View' },
    { id: 6, url: '17f1da14-8712-4fda-8cb8-471ab543f02f.jpeg', alt: 'Kitchen Counter' },
    { id: 7, url: '25ea7737-b7e0-46d8-bf9c-82de3c0c1688.jpeg', alt: 'Kitchen Appliances' },
    { id: 8, url: '4018a619-aa71-4932-b144-5304ea5ef232.jpeg', alt: 'Bedroom 1' },
    { id: 9, url: '1ff98fc8-6eeb-4aa2-a4b8-601918808756.jpeg', alt: 'Bedroom 2' },
    { id: 10, url: 'c47fa51a-1fac-4836-bfdd-a0b0b162c5d4.jpeg', alt: 'Bathroom 1' },
    { id: 11, url: '50380133-b1c3-4adb-9235-d31f9ecfdf4f.jpeg', alt: 'Bathroom 2' },
    { id: 12, url: 'cdb23a64-edec-4ae1-ad3d-95c7d304b2f7.jpeg', alt: 'Rooftop Terrace' },
    { id: 13, url: 'c175d930-737e-4688-bf29-c19fcbaaccc6.jpeg', alt: 'Gym Facility' },
    { id: 14, url: '36aebfee-9a16-4cbc-a5a4-216a7c80508c.jpeg', alt: 'Pool Area' },
    { id: 15, url: '28d3ce25-9f01-4241-be9c-b9a0a91d355a.jpeg', alt: 'Laundry Area' }
  ];

  get currentImage(): () => GalleryImage | undefined {
    return () => this.images[this.currentImageIndex()];
  }

  nextImage(): void {
    this.currentImageIndex.update((i) => (i + 1) % this.images.length);
  }

  previousImage(): void {
    this.currentImageIndex.update((i) => (i - 1 + this.images.length) % this.images.length);
  }

  goToImage(index: number): void {
    this.currentImageIndex.set(index);
  }
}
