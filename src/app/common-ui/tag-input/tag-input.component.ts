import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {SvgComponent} from '../svg/svg.component';

@Component({
  selector: 'app-tag-input',
  standalone: true,
  templateUrl: './tag-input.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    SvgComponent
  ],
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {
  @Input() tags: string[] = [];
  @Input() removable: boolean = false;
  @Input() inputId: string = '';
  newTag: string = '';

  addTag() {
    if (this.newTag.trim()) {
      this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  clearAllTags() {
    this.tags = [];
  }
}
