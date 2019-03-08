import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassordComponent } from './forgot-passord/forgot-passord.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthService } from "./shared/services/auth.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './customerdashboard/profile/profile.component';
import { VehiclesComponent } from './customerdashboard/vehicles/vehicles.component';
import { VehicleComponent } from './customerdashboard/vehicles/vehicle/vehicle.component';
import { VehicleListComponent } from './customerdashboard/vehicles/vehicle-list/vehicle-list.component';
import {VehicleService} from './shared/vehicle.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { QRCodeModule } from 'angularx-qrcode';  
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { GenerateqrComponent } from './servicestation/generateqr/generateqr.component'; 



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ForgotPassordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    HomepageComponent,
    SidenavComponent,
    ProfileComponent,
    VehiclesComponent,
    VehicleComponent,
    VehicleListComponent,
    GenerateqrComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    QRCodeModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
