import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma:FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public dialog: MatDialog, private formBuilder:FormBuilder,private router:Router) {

    this.createForm();

   }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(RegisterComponent);
  }



  createForm(){
    this.forma = this.formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      password : ['',[
        Validators.required
      ]],
    });
  }


  save(){
    if(this.forma.invalid){
      return;
    }
    Swal.fire({
      allowOutsideClick:false,
      icon:'success',
      text:'Iniciaste sesión de forma correcta'
    })

    setTimeout(function(){
      Swal.close()
    },3000)


    
    /**
     
    Swal.fire({
      icon:'error',
      title:'Usuario o contraseña incorrectos',
      text:'Ha ocurrido un error'
    })

     * 
     */

    this.router.navigateByUrl('/home')

  }

}
