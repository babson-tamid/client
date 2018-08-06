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
    phoneNum:''
    
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

  ngOnInit() {
  }

}
