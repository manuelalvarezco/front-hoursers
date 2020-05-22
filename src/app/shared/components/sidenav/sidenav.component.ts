import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public sidenavService: SidenavService) { }

  ngOnInit(){}

  closeSidenav(event){
    this.sidenavService.updateData(event);
  }

}
