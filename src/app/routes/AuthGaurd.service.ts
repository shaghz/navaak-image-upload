import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}
  
  canActivate() {
    if (localStorage.getItem('currentUser')) {
     
      return true;
  }

 
  this.router.navigate(['/login']);
  return false;
  }
}

