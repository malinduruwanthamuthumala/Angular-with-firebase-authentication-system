import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
// import { AuthGuard } from "./shared/guard/auth.guard";
// import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard.guard";


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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
