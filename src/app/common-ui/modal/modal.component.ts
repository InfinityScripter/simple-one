import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {InputComponent} from '../input/input.component';
import {LabelComponent} from '../label/label.component';
import {NgIf} from '@angular/common';
import {TagInputComponent} from '../tag-input/tag-input.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    NgIf,
    TagInputComponent
  ],
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  // Закрытие модального окна при нажатии на `Esc`
  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    this.close();
  }

  // Метод для закрытия модального окна
  close() {
    this.closeModal.emit();
  }

  // Закрытие модального окна при клике на темную область
  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }
}
