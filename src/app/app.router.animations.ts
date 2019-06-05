import { trigger, transition, query, style, group, animate, animateChild } from '@angular/animations';

export const RouterTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'tanslateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translate(-100%)' }))
      ], { optional: true })
    ])
  ])
]);

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      // query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // transition('* <=> *', [
    //   query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    //   group([
    //     query(':enter', [
    //       style({ transform: 'translateX(100%)'}),
    //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
    //     ], { optional: true }),
    //     query(':leave', [
    //       style({ transform: 'tanslateX(0%)' }),
    //       animate('0.5s ease-in-out', style({ transform: 'translate(-100%)' }))
    //     ], { optional: true })
    //   ])
    // ]),
    // transition('* <=> ExperiencePage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%'})
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%'}))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%'}))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
]);
