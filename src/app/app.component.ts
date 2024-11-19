import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SvgComponent} from './common-ui/svg/svg.component';
import {AvatarCircleComponent} from './common-ui/avatar-circle/avatar-circle.component';
import {ButtonComponent} from './common-ui/button/button.component';
import {InputComponent} from './common-ui/input/input.component';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {NavComponent} from './layout/nav/nav.component';
import {LabelComponent} from './common-ui/label/label.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgComponent, AvatarCircleComponent, ButtonComponent, InputComponent, NgForOf, HeaderComponent, NavComponent, LabelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
