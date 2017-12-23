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


export class UploadhistoryComponent implements OnInit{
  
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
        
         
     }
     ngOnInit() {
      this.yourService.getData().subscribe((data) => {
        console.log("what is in the data ", data);
        let word = data.children;
        this.names = word;
   });
  }
    copyToClipboard(i,k) {
      this.textToCopy = 'https://google.com/'+this.names[i].name+'/'+ this.names[i].children[k].name;  
      console.log('copied'+ this.textToCopy)
    } 

    imageWindow(i,k) {
      window.open('https://google.com/'+this.names[i].name+'/'+ this.names[i].children[k].name  );
    }
  
}