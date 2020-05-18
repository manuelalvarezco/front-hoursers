import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenavSource$ = new BehaviorSubject<boolean>(false);

  sidenav$ = this.sidenavSource$.asObservable();

  constructor() {}

  updateData(data: boolean) {
    this.sidenavSource$.next(data);
  }
}
