import {Injectable} from '@angular/core';
import {Router,Routes,RouterModule,NavigationExtras} from '@angular/router';

@Injectable()

export class LoginService{
        currentUser: any;
 constructor (public router:Router){
    this.currentUser = undefined;
 }

 login(userid:string,password:string){

    if (userid==='shaghz' && password==='123'){
            this.router.navigate(['mainapp']);
            console.log('correct,Wlc dear '+userid);
            localStorage.setItem(this.currentUser,JSON.stringify(userid));
           
    }

 }
 logout(){
     this.currentUser = undefined;
     localStorage.removeItem('currentUser');
     this.router.navigate(['login']);
     console.log('logged out');
 }
 isValid(){
        this.currentUser= 'shaghz'
 }
}
