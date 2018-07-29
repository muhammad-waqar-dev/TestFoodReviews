import { Component, OnInit } from '@angular/core';
import {SignupService} from "../../../services/signup.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  imageUrl;
  constructor(private upvc: SignupService) { }

  ngOnInit() {
     // console.log(this.upvc.currentUser.user.userAvatar);
     this.imageUrl = this.upvc.currentUser.user.userAvatar;
     this.imageUrl = this.imageUrl.slice(this.imageUrl.lastIndexOf('\\') + 1);
     //  console.log(this.imageUrl);
  }

}
