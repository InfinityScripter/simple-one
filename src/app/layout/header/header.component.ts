import {Component, HostListener} from '@angular/core';
import {InputComponent} from '../../common-ui/input/input.component';
import {AvatarCircleComponent} from '../../common-ui/avatar-circle/avatar-circle.component';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {SvgComponent} from '../../common-ui/svg/svg.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    InputComponent,
    AvatarCircleComponent,
    ButtonComponent,
    SvgComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
  }
}
