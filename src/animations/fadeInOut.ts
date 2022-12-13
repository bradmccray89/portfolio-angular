import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('* => *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('500ms ease-out', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(
        ':enter',
        [animate('500ms 200ms ease-out', style({ opacity: 1 }))],
        {
          optional: true,
        }
      ),
      query('*', animateChild(), { optional: true }),
    ]),
  ]),
]);
