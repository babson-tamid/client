import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { NewsServiceService } from '../services/newService.service';
import {FormsModule} from '@angular/forms';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

Newsletter:any ={
creator: '',
title:'',
description:'',
imgPath:''
}


uploader: FileUploader = new FileUploader({
  url: 'http://localhost:3000/api/newsletter',
  itemAlias: "image"
});

  constructor(
    private newsService: NewsServiceService, 
    private router:Router,
    public myAuthService: AuthService
  ) { }
  
  displayPosts(){
    this.newsService.newsletterList()
    .subscribe(
      newsObjFromApi => {
        this.Newsletter = newsObjFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }



  createPost(){
    this.newsService.createNews()
    .subscribe(
      newsObjFromApi => {
        this.Newsletter = newsObjFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }

  updatePost(){
    this.newsService.updateNews()
    .subscribe(
      newsObjFromApi => {
        this.Newsletter = newsObjFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }

  deletePost(){
    this.newsService.deleteNews()
    .subscribe(
      newsObjFromApi => {
        this.Newsletter = newsObjFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }
  
  
  uploadNewsLetter(){
    // this is comment
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





  ngOnInit() {
    this.myAuthService.isLoggedIn()
    .toPromise()
    .then((user) => {
      console.log('the user: ', user)
    } )
    .catch( err => console.log('err is: ', err))
  }

}
