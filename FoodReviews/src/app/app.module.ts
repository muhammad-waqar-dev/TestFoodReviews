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
import { UserComponent } from './Components/Profiles/user/user.component';
import { RestaurantComponent } from './Components/Profiles/restaurant/restaurant.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { AdminComponent } from './Components/Profiles/admin/admin.component';
import { ListComponent } from './Components/list/list.component';

//import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule,MatMenuModule,      
  MatToolbarModule,MatTableModule,MatTabsModule,MatIconModule,
  MatCardModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,     
  MatNativeDateModule,MatRadioModule,MatSelectModule,MatOptionModule,   
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatDividerModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';


const routes: Routes = [
 // {path:'/',redirectTo:'/home',pathMatch:'full'},   //new add
  { path:'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'user',component:UserComponent},
  {path:'restaurant' , component:RestaurantComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    RestaurantComponent,
    ReviewsComponent,
    AdminComponent,
    ListComponent
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
    MatSlideToggleModule,
    MatDividerModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
