import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2ImgToolsModule } from 'ng2-img-tools'; 
import { DropzoneModule, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AppComponent } from './app.component';
import { UploadComponent } from './mainapp/upload/upload.component';
import { LoginComponent } from './login/login.component';
import { LoginService} from './login/login.service';
import {appRoutingProviders,routing} from './routes/app.routes';
import { NavbarComponent } from './mainapp/navbar/navbar.component';
import {MainappComponent} from './mainapp/mainapp.component';
import {Size} from './models/size';
import { HttpModule } from '@angular/http';
import {  FileUploadModule  } from 'ng2-file-upload';
import {InlineEditorModule} from 'ng2-inline-editor';
import { UploadplaceComponent } from './mainapp/upload/uploadplace/uploadplace.component';
import { UploadhistoryComponent } from './mainapp/upload/uploadhistory/uploadhistory.component';
import {yourService} from './mainapp/upload/uploadhistory/your-service.service';
import { CollapsibleModule } from 'angular2-collapsible'; // <-- import the module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
     UploadComponent,
      LoginComponent,
      NavbarComponent,
      MainappComponent, UploadplaceComponent, UploadhistoryComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    // DropzoneModule.forRoot(DROPZONE_CONFIG),
    Ng2ImgToolsModule,
    ReactiveFormsModule,
    routing,
    FormsModule,
    HttpModule,
    InlineEditorModule    ,
    BrowserAnimationsModule,  // <-- include required BrowserAnimationsModule
    CollapsibleModule   ,
    ClipboardModule   ,
    
    FileUploadModule 
  ],
  providers: [LoginService,appRoutingProviders,yourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
