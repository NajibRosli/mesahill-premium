import { Component, OnInit, signal, effect, inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class]="isScrolled() ? 'nav-scrolled' : 'py-5'">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <div class="font-display font-bold text-xl whitespace-nowrap"
          [class.text-brand-navy]="isScrolled()"
          [class.text-white]="!isScrolled()">
          <a href="#" (click)="scrollToSection('hero', $event)" class="no-underline">✦ Sky-View Suite</a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-10">
          <a href="#checkin"
            (click)="scrollToSection('checkin', $event)"
            [class.text-brand-text-muted]="isScrolled()"
            [class.text-white]="!isScrolled()"
            class="font-medium transition-colors duration-300 hover:text-brand-navy no-underline">
            Check-In
          </a>
          <a href="#rules"
            (click)="scrollToSection('rules', $event)"
            [class.text-brand-text-muted]="isScrolled()"
            [class.text-white]="!isScrolled()"
            class="font-medium transition-colors duration-300 hover:text-brand-navy no-underline">
            Rules
          </a>
          <a href="#facilities"
            (click)="scrollToSection('facilities', $event)"
            [class.text-brand-text-muted]="isScrolled()"
            [class.text-white]="!isScrolled()"
            class="font-medium transition-colors duration-300 hover:text-brand-navy no-underline">
            Facilities
          </a>
          <a href="#emergency"
            (click)="scrollToSection('emergency', $event)"
            [class.text-brand-text-muted]="isScrolled()"
            [class.text-white]="!isScrolled()"
            class="font-medium transition-colors duration-300 hover:text-brand-navy no-underline">
            Emergency
          </a>
          <a href="#departure"
            (click)="scrollToSection('departure', $event)"
            [class.text-brand-text-muted]="isScrolled()"
            [class.text-white]="!isScrolled()"
            class="font-medium transition-colors duration-300 hover:text-brand-navy no-underline">
            Departure
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden flex flex-col gap-1.5 bg-none border-none cursor-pointer p-2"
          (click)="toggleMenu()"
          [class.active]="menuOpen()"
          aria-label="Toggle menu">
          <span
            [class.rotate-45]="menuOpen()"
            [class.translate-y-2]="menuOpen()"
            [class.translate-x-1]="menuOpen()"
            [class.bg-brand-navy]="isScrolled()"
            [class.bg-white]="!isScrolled()"
            class="block w-6 h-0.5 transition-all duration-300">
          </span>
          <span
            [class.opacity-0]="menuOpen()"
            [class.bg-brand-navy]="isScrolled()"
            [class.bg-white]="!isScrolled()"
            class="block w-6 h-0.5 transition-all duration-300">
          </span>
          <span
            [class.-rotate-45]="menuOpen()"
            [class.-translate-y-2]="menuOpen()"
            [class.translate-x-1]="menuOpen()"
            [class.bg-brand-navy]="isScrolled()"
            [class.bg-white]="!isScrolled()"
            class="block w-6 h-0.5 transition-all duration-300">
          </span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        [class.max-h-80]="menuOpen()"
        [class.max-h-0]="!menuOpen()"
        class="md:hidden absolute top-14 left-0 right-0 mobile-menu-bg overflow-hidden transition-all duration-300">
        <div class="flex flex-col gap-0 p-5">
          <a href="#checkin"
            (click)="scrollToSection('checkin', $event)"
            class="py-3 text-white no-underline hover:text-brand-navy transition-colors duration-300">
            Check-In
          </a>
          <a href="#rules"
            (click)="scrollToSection('rules', $event)"
            class="py-3 text-white no-underline hover:text-brand-navy transition-colors duration-300">
            Rules
          </a>
          <a href="#facilities"
            (click)="scrollToSection('facilities', $event)"
            class="py-3 text-white no-underline hover:text-brand-navy transition-colors duration-300">
            Facilities
          </a>
          <a href="#emergency"
            (click)="scrollToSection('emergency', $event)"
            class="py-3 text-white no-underline hover:text-brand-navy transition-colors duration-300">
            Emergency
          </a>
          <a href="#departure"
            (click)="scrollToSection('departure', $event)"
            class="py-3 text-white no-underline hover:text-brand-navy transition-colors duration-300">
            Departure
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-scrolled {
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
    .mobile-menu-bg {
      background-color: rgba(26, 31, 58, 0.98);
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  menuOpen = signal(false);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((val) => !val);
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);

    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
