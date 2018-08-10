import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';
import {UserComponent} from '../user/user.component';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  
  theActualUser:any = {
    email:'',
    password: '',
    name:'',
    gradDate:'',
    phoneNum:''
    
  }

  uploader: FileUploader = new FileUploader({
    url: `${environment.apiBase}/api/profilePic/`,
    itemAlias: "image"
  });

  constructor(private authService: AuthService, private router: Router) { }


  uploadProfilePic(){
    
        this.uploader.onBuildItemForm = (item, form) => {
          console.log('building it breh')
        }
    
        this.uploader.onSuccessItem =(item, form)=>{
          console.log('SUCCESS')
          // this.router.navigate(['/'])
          // window.location.reload();

        }
        this.uploader.onErrorItem = (item, res)=>{
          console.log("ERRRROR")
        }
    
        this.uploader.uploadAll();
        // window.location.reload();
        location.reload();
    
      }

      reloadPage(){
        
        location.reload();

      }

      


  ngOnInit() {
  }

}
