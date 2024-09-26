import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-box-animation',
  standalone: true,
  imports: [],
  templateUrl: './box-animation.component.html',
  styleUrl: './box-animation.component.scss'
})
export class BoxAnimationComponent {
 flip = signal(false)
}
