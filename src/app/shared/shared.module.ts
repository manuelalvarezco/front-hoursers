import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './components/form-register/form-register.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent, SidenavComponent, FormRegisterComponent],
  entryComponents:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    SidenavComponent,
    FormRegisterComponent
  ]
})
export class SharedModule { }
