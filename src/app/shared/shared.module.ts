import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent, SidenavComponent],
  entryComponents:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
