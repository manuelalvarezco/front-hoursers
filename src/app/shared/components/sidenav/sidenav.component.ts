import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public sidenavService: SidenavService,public dialog: MatDialog) { }

  ngOnInit(){}

  closeSidenav(event){
    this.sidenavService.updateData(event);
  }

  openDialog(){
    this.dialog.open(RegisterComponent);
  }

}
