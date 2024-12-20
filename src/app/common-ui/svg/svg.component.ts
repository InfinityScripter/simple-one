import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: ['']
})
export class SvgComponent {
  @Input() icon = '';

  get href() {
    const baseHref = document.getElementsByTagName('base')[0]?.href || '/';
    return `${baseHref}assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
