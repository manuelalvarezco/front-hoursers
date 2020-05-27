import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidenavService: SidenavService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSidenav(event){
    this.sidenavService.updateData(event);
  }

  openDialog(){
    this.dialog.open(RegisterComponent);
  }
}
