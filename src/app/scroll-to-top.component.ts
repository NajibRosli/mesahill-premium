import { Component, ChangeDetectionStrategy, signal, HostListener, inject, computed } from '@angular/core';
import { BackgroundColorService } from './background-color.service';

@Component({
  selector: 'app-scroll-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isVisible()) {
      <button
        (click)="scrollToTop()"
        [class]="buttonClass()"
        aria-label="Scroll to top"
        title="Back to top"
      >
        <span class="text-2xl">↑</span>
      </button>
    }
  `,
  styles: [`
    button {
      animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ScrollToTopComponent {
  private readonly bgColorService = inject(BackgroundColorService);

  isVisible = signal(false);

  buttonClass = computed(() => {
    const bgColor = this.bgColorService.currentBackgroundColor();
    const baseClass = 'fixed bottom-20 right-4 sm:right-6 md:right-8 z-40 p-4 rounded-full transition-all duration-300 font-bold';
    
    const colorClasses: Record<string, string> = {
      'light': 'bg-brand-navy text-white hover:bg-opacity-80 hover:scale-110 shadow-lg hover:shadow-xl',
      'dark': 'bg-white text-brand-navy hover:bg-opacity-90 hover:scale-110 shadow-lg hover:shadow-xl',
      'navy': 'bg-white text-brand-navy hover:bg-opacity-90 hover:scale-110 shadow-lg hover:shadow-xl',
      'beige': 'bg-brand-navy text-white hover:bg-opacity-80 hover:scale-110 shadow-lg hover:shadow-xl'
    };

    return `${baseClass} ${colorClasses[bgColor]}`;
  });

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
