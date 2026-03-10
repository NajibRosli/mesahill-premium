import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-departure',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="departure" class="bg-brand-navy text-white py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold">Departure Checklist</h2>
          <p class="text-lg text-white/90 mt-4">Please complete before you leave to help us prepare for the next guest.</p>
        </div>
        <div class="max-w-md mx-auto bg-white/5 rounded-md p-10" appScrollReveal>
          <div class="mb-8">
            <div class="text-sm text-white/90 mb-3">
              {{ checkedCount() }} of {{ items().length }} completed
            </div>
            <div class="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-brand-warning to-orange-500 transition-all duration-600" [style.width.%]="progressPercent()"></div>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div *ngFor="let item of items()" class="flex items-center gap-4 p-4 bg-white/10 rounded-md transition-all duration-300 cursor-pointer hover:bg-white/15" [class.opacity-60]="item.completed">
              <button
                class="w-6 h-6 min-w-6 border-2 border-white/50 rounded flex items-center justify-center transition-all duration-300"
                [class.bg-brand-warning]="item.completed"
                [class.border-brand-warning]="item.completed"
                (click)="toggleItem(item.id)"
                [attr.aria-label]="'Toggle ' + item.text"
              >
                <span class="text-brand-navy font-bold text-sm" *ngIf="item.completed">✓</span>
              </button>
              <span class="text-white flex-1" [class.line-through]="item.completed" [class.opacity-60]="item.completed">{{ item.text }}</span>
            </div>
          </div>

          <div *ngIf="isAllChecked()" class="bg-brand-warning/15 border-2 border-brand-warning rounded-md p-8 text-center slide-down">
            <div class="text-4xl mb-4">✓</div>
            <p class="m-0 text-lg text-brand-warning font-semibold">You're all set! Safe travels and thank you for staying with us.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class DepartureComponent {
  items = signal<ChecklistItem[]>([
    { id: 1, text: 'Turn off A/C and unnecessary lights', completed: false },
    { id: 2, text: 'Place used towels in the laundry basket', completed: false },
    { id: 3, text: 'Ensure windows and balcony doors are closed and locked', completed: false },
    { id: 4, text: 'Return keycard or follow contactless check-out instructions', completed: false }
  ]);

  checkedCount = computed(() => this.items().filter((item) => item.completed).length);

  progressPercent = computed(() => {
    const total = this.items().length;
    return total > 0 ? (this.checkedCount() / total) * 100 : 0;
  });

  isAllChecked = computed(() => this.checkedCount() === this.items().length);

  toggleItem(id: number): void {
    this.items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }
}
