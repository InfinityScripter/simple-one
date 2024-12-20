import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SvgComponent} from './common-ui/svg/svg.component';
import {AvatarCircleComponent} from './common-ui/avatar-circle/avatar-circle.component';
import {ButtonComponent} from './common-ui/button/button.component';
import {InputComponent} from './common-ui/input/input.component';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {NavComponent} from './layout/nav/nav.component';
import {LabelComponent} from './common-ui/label/label.component';
import {TagInputComponent} from './common-ui/tag-input/tag-input.component';
import {MainComponent} from './layout/main/main.component';
import {ScrollService} from './service/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgComponent, AvatarCircleComponent, ButtonComponent, InputComponent, NgForOf, HeaderComponent, NavComponent, LabelComponent, TagInputComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop;
    this.scrollService.updateStickyState(scrollOffset);
  }
}
