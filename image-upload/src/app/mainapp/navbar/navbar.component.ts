import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser:any;
  constructor(public loginService:LoginService) { 
    
      }
      user = JSON.parse(localStorage.getItem(this.currentUser));
      onLogOut(){
        this.loginService.logout();
        
      }
      ngOnInit() {
      }
    

}
