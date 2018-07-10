import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HttpModule } from '@angular/http';
import { SignupService } from "./services/signup.service";
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule,MatMenuModule,      
  MatToolbarModule,MatTableModule,MatTabsModule,MatIconModule,
  MatCardModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,     
  MatNativeDateModule,MatRadioModule,MatSelectModule,MatOptionModule,   
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
const routes: Routes = [
 // {path:'/',redirectTo:'/home',pathMatch:'full'},   //new add
  { path:'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    //AppRoutingModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,   
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
