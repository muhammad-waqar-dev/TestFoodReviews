import { Component, OnInit } from '@angular/core';
import {SignupService} from "../services/signup.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regiForm: FormGroup; 
  Email:string;
  Password:string;

  constructor(private fb: FormBuilder , private service: SignupService , private router: Router) { 
    this.regiForm = fb.group({
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'Password':[null, Validators.required]
    }); 
  }

  onChange(event:any)  
  {  
    
  }  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form.value); 
     this.service.authenticateUser('login' ,form.value).subscribe(res =>{
       if(res.status == 200){
          localStorage.setItem('Token',res.token);
          localStorage.setItem('signups',form.value.Email);
          this.router.navigate(['home']);
          // console.log(form.value);
       }
     });
  }

  ngOnInit() {
  }

}
