import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SvgComponent} from './common-ui/svg/svg.component';
import {AvatarCircleComponent} from './common-ui/avatar-circle/avatar-circle.component';
import {ButtonComponent} from './common-ui/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgComponent, AvatarCircleComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-one';
}
