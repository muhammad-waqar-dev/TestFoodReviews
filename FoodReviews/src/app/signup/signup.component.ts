import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild  } from '@angular/core';
import {SignupService} from "../services/signup.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
regiForm: FormGroup; 

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder , private service: SignupService , private router: Router,
    private cd: ChangeDetectorRef) {
      this.createForm();
  }
   
   createForm() {
    this.regiForm = this.fb.group({
    'UserName' : [null, Validators.required],  
    'Email':[null, Validators.compose([Validators.required,Validators.email])], 
    'Password' : [null, Validators.required],  
    'CountryName' : [null, Validators.required], 
    'CityName' : [null, Validators.required], 
    'PhoneNumber' : [null,[Validators.required, Validators.min(1111111111), Validators.max(9999999999999)]], 
    'UserType' : [null, Validators.required],  
    "userImage": [null, Validators.required]
    });
  }

   get UserName() { return this.regiForm.get('UserName') }
   get Email() { return this.regiForm.get('Email') }
   get Password() { return this.regiForm.get('Password') }
   get CountryName() { return this.regiForm.get('CountryName') }
   get CityName() { return this.regiForm.get('CityName') }
   get PhoneNumber() { return this.regiForm.get('PhoneNumber') }
   get UserType() { return this.regiForm.get('UserType') }
// get file(){ return this.signupForm.get('file')}
  // set userAvatar(val:any){ this.userAvatar = val; }  


   ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.regiForm.get('userImage').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('UserName', this.regiForm.get('UserName').value);
    input.append('Email', this.regiForm.get('Email').value);
    input.append('Password', this.regiForm.get('Password').value);
    input.append('CountryName', this.regiForm.get('CountryName').value);
    input.append('CityName', this.regiForm.get('CityName').value);
    input.append('PhoneNumber', this.regiForm.get('PhoneNumber').value);
    input.append('userType', this.regiForm.get('userType').value);
    input.append('userImage', this.regiForm.get('userImage').value);
    return input;
  }
  
     // Executed When Form Is Submitted  
  onFormSubmit()  
  {  
    //console.log(form.value); 
    const formModel = this.prepareSave();
     this.service.post('signup' ,formModel).subscribe(res =>{
       if(res){
          //localStorage.setItem('Token',res.token);
          //localStorage.setItem('signups',formModel.Email);
          if(formModel.UserType === "NormalUser"){
            this.router.navigate(['user']);
          }else{
            this.router.navigate(['restaurant']);   
          }
         
          //console.log(formModel)
       }
     });
  } 

}
