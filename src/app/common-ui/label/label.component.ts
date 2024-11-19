import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  templateUrl: './label.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() forId: string = ''; // ID элемента, к которому привязана метка
  @Input() required: boolean = false; // Определяет, обязательное ли поле
}
