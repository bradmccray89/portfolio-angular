import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private showNavbar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public readonly showNavbar$ = this.showNavbar.asObservable();

  constructor() {}

  setShowNavbar(showNavbar: boolean): void {
    this.showNavbar.next(showNavbar);
  }
}
