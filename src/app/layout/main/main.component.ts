import { Component } from '@angular/core';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {LabelComponent} from '../../common-ui/label/label.component';
import {InputComponent} from '../../common-ui/input/input.component';
import {TagInputComponent} from '../../common-ui/tag-input/tag-input.component';
import {ModalComponent} from '../../common-ui/modal/modal.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    TagInputComponent,
    ModalComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  openModal: boolean = false;

  toggleModal() {
    this.openModal = !this.openModal;
  }
}
