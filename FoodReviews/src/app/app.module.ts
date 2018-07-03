import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HttpModule } from '@angular/http';
import { SignupService } from "./services/signup.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { AppRoutingModule } from './/app-routing.module';


const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //{path:'/',redirectTo:'home',pathMatch:'full'}   //new add
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    //AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
