import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup,FormsModule,FormControl,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { LoginService} from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string = '';
  password: string = '';
  return: string = '';

  constructor(private loginService :LoginService,private router: Router, private route: ActivatedRoute) { 
    
  }
  ngOnInit() {
    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/forums');
  }
  
  onSubmit(userid:string ,password:string){
    this.loginService.login (userid,password);
    // this.router.navigateByUrl(this.return);
    } 
}
