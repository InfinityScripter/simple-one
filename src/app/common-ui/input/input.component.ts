import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [
    SvgComponent,
    NgIf
  ],
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() icon: string | null = null;
  @Input() inputId: string = '';
  @Input() value: string = '';
}
