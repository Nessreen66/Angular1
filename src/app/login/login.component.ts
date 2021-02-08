import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  
  constructor(private _AuthService:AuthService ,private _Router:Router) {
   }

   login:FormGroup=new FormGroup({
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9]{4,8}$')])
   });

   loginForm(formdata:FormGroup)
   {
     if(formdata.valid){
      
      this._AuthService.loginform(formdata.value).subscribe((response)=>{

        if(response.message =="success")
        {
          localStorage.setItem("currentUser" ,response.token);
          this._AuthService.saveCurrentUser();
          this._Router.navigate(['/home']);
        }
        else
        {
          this.error=response.message;
        }
      })

     }
   }

   get email() { return this.login.get('email'); }
   get password() { return this.login.get('password'); }
  ngOnInit(): void {
  }

}
