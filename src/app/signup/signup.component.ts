import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  error:string='';
  
  constructor(private _AuthService:AuthService ,private _Router:Router) {
   }

   signup:FormGroup=new FormGroup({
     first_name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
     last_name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9]{4,8}$')])
   });

   registerForm(formdata:FormGroup)
   {
     if(formdata.valid){
      
      this._AuthService.regform(formdata.value).subscribe((response)=>{

        if(response.message =="success")
        {
          this._Router.navigate(['/login']);
        }
        else
        {
          this.error=response.message;
        }
      })

     }
   }

   get first_name() { return this.signup.get('first_name'); }
   get last_name() { return this.signup.get('last_name'); }
   get email() { return this.signup.get('email'); }
   get password() { return this.signup.get('password'); }

   

  ngOnInit(): void {
  }

}
