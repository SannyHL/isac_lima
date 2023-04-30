import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const modalAnimations = [
  trigger('openClose', [
    transition(':enter', [
      query('.mat-dialog-container', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        stagger(100, [
          animate('2s ease', style({ opacity: 1, transform: 'scale(1.2)' })),
          animate('0.2s ease', style({ transform: 'scale(1.0)' })),
          animate('0.2s ease', style({ transform: 'scale(1.1)' })),
          animate('0.2s ease', style({ transform: 'scale(1.0)' })),
        ])
      ])
    ]),
    transition(':leave', [
      query('.mat-dialog-container', [
        stagger(-100, [
          animate('0.2s ease', style({ transform: 'scale(1.2)' })),
          animate('0.2s ease', style({ transform: 'scale(0.5)', opacity: 0 })),
        ])
      ])
    ])
  ])
];
