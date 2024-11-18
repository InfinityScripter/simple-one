import { Component, Input } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {SvgComponent} from '../svg/svg.component';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    NgClass,
    NgIf,
    SvgComponent
  ],
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'icon' | 'icon-no-border' = 'primary';
  @Input() label: string = '';
  @Input() icon: string | null = null;
}
