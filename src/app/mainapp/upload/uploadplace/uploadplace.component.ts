import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { DropzoneComponent , DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {Size} from '../../../models/size';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, FormBuilder, Validators,FormArray } from '@angular/forms';
import { FileUploader,FileItem,ParsedResponseHeaders } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import { Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {  SafeUrl } from '@angular/platform-browser';
import {InlineEditorComponent} from 'ng2-inline-editor';

@Component({
  selector: 'uploadplace',
  templateUrl: './uploadplace.component.html',
  styleUrls: ['./uploadplace.component.css']
})


export class UploadplaceComponent {
  togglebutton:boolean = false;
  imagepreviewArray=[];
  size1:boolean = false;
  size2:boolean=false;
  size3:boolean = false;
  size4:boolean=false;
  size5:boolean = false;
  size6:boolean=false;
  size7:boolean = false;
  size8:boolean=false;
  size9:boolean = false;
  value :string='';
  show: boolean = false;
  dimensions: any[]=[]
  imgName :any[]=[];
  error:string;
  err:string;
  hideme=[]
  sizes : object = {'dimensions':this.dimensions ,'imgName': this.imgName}
      
      public filePreviewPath: SafeUrl;
      public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/upload'});

    
    onChange(files) {
  
    }
   
    arrayTrackBy(index: number, value: string): number {
     
      return index;
    }
    check(){
     
      if(!this.size1 && !this.size2 && !this.size3 &&!this.size4 && !this.size5 && !this.size6 &&!this.size7&& !this.size8 && !this.size9 ){
       this.togglebutton= false;
      }
      else{
        this.togglebutton= true;
      }
    }
    onSubmit(value) {

      this.dimensions.pop()
      if( this.size1){
          this.dimensions.push({width:'500',height:'500'});
    }
   
    if(this.size2){
      this.dimensions.push({width:'400',height:'400'});
    }
    if( this.size3){
      this.dimensions.push({width:'320',height:'320'});
    }
    if(this.size4){
      this.dimensions.push({width:'300',height:'300'});
    }
    if( this.size5){
      this.dimensions.push({width:'280',height:'280'});
    }
    if(this.size6){
      this.dimensions.push({width:'200',height:'200'});
    }
    if( this.size7){
      this.dimensions.push({width:'140',height:'140'});
    }
    if(this.size8){
      this.dimensions.push({width:'96',height:'96'});
    }
    if(this.size9){
      this.dimensions.push({width:'50',height:'50'});
    }
   
  }
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let error = JSON.parse(response);
    this.err    = error['err'];
   
}

    constructor(private http:Http,private fb:FormBuilder,private element: ElementRef,private sanitizer:DomSanitizer) {
      
      this.uploader.onAfterAddingFile = (item) => {
          this.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(item._file)));
          this.imagepreviewArray.push(this.filePreviewPath)

      } 

      this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
      this.uploader.onCompleteItem = (item, response, status, header) => {

        this.imgName.pop();
        this.imgName.push(item.file.name)
        if (status === 200) {
          return this.http.post('http://localhost:3000/sizes' ,this.sizes)
          .subscribe();
        }
        
    }
  }
}
  
          
