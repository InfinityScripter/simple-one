import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private stickySubject = new BehaviorSubject<boolean>(false);
  isSticky$ = this.stickySubject.asObservable();

  updateStickyState(scrollOffset: number) {
    this.stickySubject.next(scrollOffset > 0);
  }
}
