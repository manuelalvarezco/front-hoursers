import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaswordResetComponent } from './components/pasword-reset/pasword-reset.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PaswordResetComponent],
  entryComponents:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterComponent
  ]
})
export class AuthModule { }
