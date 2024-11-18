import { Component } from '@angular/core';
import {InputComponent} from '../../common-ui/input/input.component';
import {AvatarCircleComponent} from '../../common-ui/avatar-circle/avatar-circle.component';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {SvgComponent} from '../../common-ui/svg/svg.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    InputComponent,
    AvatarCircleComponent,
    ButtonComponent,
    SvgComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
