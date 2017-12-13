import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Http ,Response,HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {yourService} from './your-service.service';
import { CollapsibleModule } from 'angular2-collapsible';

@Component({
  selector: 'uploadhistory',
  templateUrl: './uploadhistory.component.html',
  styleUrls: ['./uploadhistory.component.css']
})


export class UploadhistoryComponent {
  
  newTrustFormVisible: false; 
  names: any[];
  children: any[];
  myjsondata: any;
  data:any;
  patdata:any;
  textToCopy:string;
  imageUrl:string;
  url:string;
  sth:string;

    constructor(private http: Http,public yourService: yourService) {
         this.yourService.getData().subscribe((data) => {
              console.log("what is in the data ", data);
              let word = data.children;
              console.log(word)
              this.names = word;
         });
         
     }
    copyToClipboard(i,k) {
      this.textToCopy = 'https://static-do-srv1.navaak.com/images/other/'+this.names[i]+'/'+ this.names[i].children[k].name;  
      console.log('copied'+ this.textToCopy)
    } 

    imageWindow(i,k) {
      window.open('https://static-do-srv1.navaak.com/images/other/'+this.names[i]+'/'+ this.names[i].children[k].name  );
    }
  
}