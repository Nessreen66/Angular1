import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin: boolean = false;
  constructor(private _AuthService:AuthService) {

   
_AuthService.currentUserData.subscribe(()=>{


  if (_AuthService.currentUserData.getValue()) {

    this.islogin = true;

  }
  else {

    this.islogin = false;

  }

 

});

  
  }

  logout()
  {
    this._AuthService.logout();
  }


  ngOnInit(): void {
  }

}
