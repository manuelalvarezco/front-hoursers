import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  
  machPasswords = true;

  type;
  forma:FormGroup;

  constructor(private formBuilder:FormBuilder,  private router:Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  personType($event:MatRadioChange){

  }

  createForm(){
    this.forma = this.formBuilder.group({
      type:['',Validators.required],
      name:['',Validators.required],
      last_name:['',Validators.required],
      phone:['',Validators.required],
      email : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password : ['',[Validators.required, Validators.minLength(6)]],
      password_confirmation : ['',[Validators.required, Validators.minLength(6)]],
      terms : ['',Validators.required],
    });
  }


  get validPassOne(){
    return this.forma.get('password').invalid && this.forma.get('password').touched;
  }
  
  get validPassTwo(){

    const passOne = this.forma.get('password').value;
    const password_confirmation = this.forma.get('password_confirmation').value;

    if(passOne != password_confirmation && this.forma.get('password_confirmation').touched){
      return false;
    }

    return true;
  }

  register(){

    if(this.forma.invalid){
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      icon:'success',
      text:'Gracias por registrarte'
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
