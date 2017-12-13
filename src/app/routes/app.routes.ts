import { Routes,RouterModule,Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {UploadComponent} from '../mainapp/upload/upload.component';
import {NavbarComponent} from '../mainapp/navbar/navbar.component';
import {MainappComponent} from '../mainapp/mainapp.component';
import{AuthGuardService} from './AuthGaurd.service';
export const routes:Routes =[
    { path: '', component: MainappComponent },
    { path: 'mainapp', component: MainappComponent },
    { path: 'login', component: LoginComponent},
    { path: 'navbar', component: NavbarComponent}
]

export const appRoutingProviders: any[] = [
    
    ];

export const routing = RouterModule.forRoot(routes);