import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class yourService {
    
    private _url = "../../../../assets/names.json";
    constructor(public http:Http) {}
data:any;


getData() {

      return this.http.get(this._url)
      .map((response: Response) => response.json())
      .do(data => console.log("User data" + JSON.stringify(data)))
    
  }

}