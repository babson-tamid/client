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

newsletter:any ={
  creator: '',
  title:'',
  description:'',
  imgPath: ''
}

role: String;


uploader: FileUploader = new FileUploader({
  url: 'http://localhost:3000/api/newsletter/create',
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
      newsObjectsFromApi => {
        console.log('blah: ', newsObjectsFromApi)
        this.newsletter = newsObjectsFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }



  createPost(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('creator', this.newsletter.creator);
      form.append('title', this.newsletter.title);
      form.append('description', this.newsletter.description);
    }


    this.uploader.onSuccessItem =(item, form)=>{
      this.newsletter = {
        creator: '',
        title:'',
        description:''
      }
      this.router.navigate(['/newsletter']);
    }

    this.uploader.onErrorItem = (item, res)=>{
      console.log("ERRRROR")
    }

    this.uploader.uploadAll();
    // this.newsService.createNews()
    // .subscribe(
    //   newsObjFromApi => {
    //     this.Newsletter = newsObjFromApi;
    //     this.router.navigate(['/newsletter'])
    //   }
    // )
  }


  deletePost(){
    this.newsService.deleteNews()
    .subscribe(
      newsObjFromApi => {
        this.newsletter = newsObjFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }
  
  ngOnInit() {
    this.myAuthService.isLoggedIn()
    .toPromise()
    .then((user) => {
      this.role = user.role;
      
      console.log('what: ', this.role)
    } )
    .catch( err => console.log('err is: ', err))

    this.displayPosts();
  }

}
