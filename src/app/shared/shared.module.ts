import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BannerComponent
  ]
})
export class SharedModule { }
