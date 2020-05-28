import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-pasword-reset',
  templateUrl: './pasword-reset.component.html',
  styleUrls: ['./pasword-reset.component.scss']
})
export class PaswordResetComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

  reset(){
    if(!this.emailFormControl.valid){
      return;
    }

    Swal.fire({
      allowOutsideClick:true,
      icon:'info',
      text:'Si estas registrado revisa tu correo y recupera tu contraseña :)'
    })

    setTimeout(function(){
      Swal.close()
    },5000)
    

    this.router.navigateByUrl('/home')
      
    
    
  }

}
