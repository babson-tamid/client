import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  theActualUser:any = {
    email:'',
    password: '',
    name:'',
    gradDate:'',
    phoneNum:''
    
  }

  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/resume',
    itemAlias: "image"
  });

  constructor(private authService: AuthService, private router: Router) { }
  

  uploadResume(){

    console.log("before:", this.uploader);

    // this.uploader = new FileUploader({
    //   url: 'http://localhost:3000/api/resume',
    //   itemAlias: "image"
    // });


    console.log('after: ',this.uploader)



    this.uploader.onBuildItemForm = (item, form) => {
      console.log('building it breh')
    }


    this.uploader.onSuccessItem =(item, form)=>{
      console.log('SUCCESS')
      this.router.navigate(['/'])
      
    }

    this.uploader.onErrorItem = (item, res)=>{
      console.log("ERRRROR")
    }

    this.uploader.uploadAll();


  }

  // uploadProfilePic(){

  //   this.uploader = new FileUploader({
  //     url: `http://localhost:3000/api/profilePic`,
  //     itemAlias: "images"
  //   });

  //   this.uploader.onBuildItemForm = (item, form) => {
    
  //     this.uploader.uploadAll();

  //   }


  //   this.uploader.onSuccessItem =(item, form)=>{
  //     this.router.navigate(['/'])
  //   }

  //   this.uploader.uploadAll();

  // }

  ngOnInit() {
  }

}
