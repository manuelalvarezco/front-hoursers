import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../core/services/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidenav$: Observable<boolean>;

  public opened;

  constructor(public sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.sidenav$.subscribe(
      data => {
        this.opened = data;
      }
    );
  }


}
