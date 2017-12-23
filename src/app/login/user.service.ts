import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { LoginService } from './login.service';
import { User } from './user';
 
@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private loginService: LoginService) {
    }
 
    getUsers(): Observable<User[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
        let options = new RequestOptions({ headers: headers });
 
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }
}