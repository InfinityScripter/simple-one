import { Component } from '@angular/core';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {LabelComponent} from '../../common-ui/label/label.component';
import {InputComponent} from '../../common-ui/input/input.component';
import {TagInputComponent} from '../../common-ui/tag-input/tag-input.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    TagInputComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
