import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from './scroll-reveal.directive';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="faq" class="bg-brand-beige py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16" appScrollReveal>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-brand-text">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-brand-text-muted mt-4">
            Everything you need to know about your stay at MesaHill Premier
          </p>
        </div>

        <div class="space-y-4">
          @for (faq of faqs; track faq.id) {
            <div
              class="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
              appScrollReveal
            >
              <button
                class="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent border-none"
                [attr.aria-expanded]="openId() === faq.id"
                [attr.aria-controls]="'faq-answer-' + faq.id"
                (click)="toggle(faq.id)"
              >
                <h3 class="text-base md:text-lg font-bold text-brand-text pr-4">
                  {{ faq.question }}
                </h3>
                <span
                  class="text-2xl text-brand-navy flex-shrink-0 transition-transform duration-300"
                  [class.rotate-45]="openId() === faq.id"
                >
                  +
                </span>
              </button>

              <div
                [id]="'faq-answer-' + faq.id"
                role="region"
                [attr.aria-labelledby]="'faq-q-' + faq.id"
                class="overflow-hidden transition-all duration-300"
                [class.max-h-0]="openId() !== faq.id"
                [class.max-h-96]="openId() === faq.id"
                [class.pb-6]="openId() === faq.id"
              >
                <p class="px-6 text-sm md:text-base text-brand-text-muted leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class FaqComponent {
  openId = signal<number | null>(null);

  faqs: Faq[] = [
    {
      id: 1,
      question: 'Where is MesaHill Premier Sky-View Suite located?',
      answer:
        'MesaHill Premier Sky-View Suite is located in Menara Premium 1, MesaHill, Nilai, Negeri Sembilan, Malaysia. It enjoys direct walking access to MesaMall and is just 15 minutes by car from KLIA and KLIA2. Nearby landmarks include USIM, INTI International University, Nilai University, AEON Mall Nilai, and Aurelius Hospital.',
    },
    {
      id: 2,
      question: 'How do I check in at MesaHill Premier?',
      answer:
        'We offer hassle-free 24/7 self check-in via a secure lockbox. Check-in is from 3:00 PM onwards and check-out is at 12:00 PM. Simply collect the keys from the mailbox at any time — no need to coordinate schedules. Early check-in or late check-out can be arranged upon request.',
    },
    {
      id: 3,
      question: 'Is parking available at MesaHill Premier?',
      answer:
        'Yes! One dedicated covered car parking space is included with every booking at no extra charge. The parking is conveniently located within the same building, so you can easily access your unit from the car park.',
    },
    {
      id: 4,
      question: 'How far is MesaHill Premier from KLIA and KLIA2?',
      answer:
        'MesaHill Premier is approximately 24 km from KLIA2, which takes about 15–20 minutes by car via the ELITE highway. It is one of the closest quality short-term rental options to the airport in the Nilai area — ideal for early flights or late arrivals. Cyberjaya and Putrajaya are also just 25–30 minutes away.',
    },
    {
      id: 5,
      question: 'Does MesaHill Premier have a swimming pool?',
      answer:
        'Absolutely! Guests enjoy exclusive access to a stunning 30-metre infinity pool and jacuzzi on Level 12, open daily from 7:00 AM to 10:00 PM. The rooftop sky deck on the top floor offers 360° panoramic views — perfect for sunrise or sunset relaxation. A fully equipped gym is also available on Level 13.',
    },
    {
      id: 6,
      question: 'What attractions and amenities are nearby?',
      answer:
        'MesaHill Premier is walking distance to MesaMall, which includes FamilyMart, Jaya Grocer, Coffee Bean, bowling, and various restaurants. A short drive away you\'ll find AEON Mall Nilai, Lotus\'s Nilai, USIM, INTI International University, Nilai University, MILA University, and Aurelius Hospital. Seremban is about 30 minutes away.',
    },
  ];

  toggle(id: number): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
