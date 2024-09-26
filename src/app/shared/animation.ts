import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        group([
            query(':enter img', style({ opacity: 0.3, scale: 0.3, transform: 'rotateX(90deg)' }), { optional: true }),
            query(':enter img', animate('500ms ease-in-out', style({ opacity: 1, scale: 1, transform: 'rotateX(0deg)' })), { optional: true }),
            query(':leave img', animate('500ms ease-in-out', style({ opacity: 0.3, scale: 0.3 })), { optional: true }),
        ]),
        group([
            query(':enter .square', style({ opacity: 0.3, scale: 0.3 }), { optional: true }),
            query(':enter .square', animate('300ms ease-in-out', style({ opacity: 1, scale: 1, })), { optional: true }),
            query(':leave .square', animate('300ms ease-in-out', style({ opacity: 0.3, scale: 0.3 })), { optional: true }),
        ])
    ])
])
