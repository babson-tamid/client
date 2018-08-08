import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  checkemailUser:any = {
    email:''
  };
  theActualUser:any = {
    email:'',
    password: '',
    name:'',
    gradDate:'',
    phoneNum:'',
    linkedInUrl:''
    
  }
  


 


  

  theError:any;


  constructor(private authService: AuthService, private router:Router) { }

  checkEmail(){
    console.log("this.checkemailUser: ", this.checkemailUser);    
    this.authService.checkemail(this.checkemailUser)
    .subscribe(userObjFromApi => { 
        this.theActualUser = userObjFromApi;
      //  this.uploader = new FileUploader({
      //     url: `http://localhost:3000/api/user/${this.theActualUser._id}/finish-signup`,
      //     itemAlias: "images"
      //   });     
      },
        (error)=>{this.theError = error}
        
      )
}

// signUpUser:any = {
//   email:this.theActualUser.email,
//   password: '',
//   name:this.theActualUser.name,
//   gradDate:this.theActualUser.gradDate,
//   phoneNum:this.theActualUser.phoneNum
// }


  tryToSignUp(){
    // console.log("try front: ",this.theActualUser); 
    // this.uploader.onBuildItemForm = (item, form) => {
    //   console.log('0000000000000000000', item, form)
    //   form.append('email', this.theActualUser.email);
    //   form.append('password', this.theActualUser.password);
    //   form.append('name', (this.theActualUser.name));
    //   form.append('gradDate', (this.theActualUser.gradDate));
    //   form.append('phoneNum', (this.theActualUser.phoneNum));
    this.authService.signup(this.theActualUser)
    .subscribe(
      userObjFromApi =>{ 
        this.theActualUser = userObjFromApi;
        this.router.navigate(['/login'])
      });
      error=>{this.theError = error}
    
    ;


    }





    
    logMeOut(){
      this.authService.logout()
      .subscribe(res =>{this.theActualUser = {}})
    }
    ngOnInit() {
    }
    
  
  }


  
  



