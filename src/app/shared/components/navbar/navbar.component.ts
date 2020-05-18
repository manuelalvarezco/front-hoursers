import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  openSidenav(event){
    this.sidenavService.updateData(event);
  }

}
