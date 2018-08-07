import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

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

  applyNow(){
    this.authService.apply(this.theActualUser)
    .subscribe(
      userObjFromApi =>{ 
        this.theActualUser = userObjFromApi;
        this.router.navigate(['/login'])
      });
      error=>{this.theError = error}
    
    ;


  }

  // this.uploader.onBuildItemForm = (item, form) => {
  //   form.append('creator', this.newsletter.creator);
  //   form.append('title', this.newsletter.title);
  //   form.append('description', this.newsletter.description);
  // }


  // this.uploader.onSuccessItem =(item, form)=>{
  //   this.newsletter = {
  //     creator: '',
  //     title:'',
  //     description:''
  //   }
    

  
  //   this.uploader.onErrorItem = (item, res)=>{
  //     console.log("ERRRROR")
  //   }

  //   this.uploader.uploadAll();
  //   // this.newsService.createNews()
  //   // .subscribe(
  //   //   newsObjFromApi => {
  //   //     this.Newsletter = newsObjFromApi;
  //   //     this.router.navigate(['/newsletter'])
  //   //   }
  //   // )
  // }

  ngOnInit() {
  }

}
