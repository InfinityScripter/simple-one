import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-circle',
  standalone: true,
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.css']
})
export class AvatarCircleComponent {
  @Input() avatarUrl: string | null = null;
}
