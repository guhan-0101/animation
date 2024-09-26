import { Component } from '@angular/core';
import { Image } from '../../assets/images/images';

@Component({
  selector: 'app-intro-animation',
  standalone: true,
  imports: [Image],
  templateUrl: './intro-animation.component.html',
  styleUrl: './intro-animation.component.scss'
})
export class IntroAnimationComponent {
  image = new Image()
}
