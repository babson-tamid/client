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

newsletter:any = {
  creator: '',
  title:'',
  description:'',
  imgPath: '',
  _id: ''
}
newsletters: any = [];

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
        this.newsletters = newsObjectsFromApi;
        this.router.navigate(['/newsletter'])
      }
    )
  }



  createPost(){
    console.log('begin: ', this.newsletter)
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('creator', this.newsletter.creator);
      form.append('title', this.newsletter.title);
      form.append('description', this.newsletter.description);
    }


    this.uploader.onSuccessItem =(item, form)=>{
      console.log('in success')
      this.newsletter = {
        creator: '',
        title:'',
        description:'',
        imgPath: ''
      }
      this.router.navigate(['/newsletter']);
      location.reload();

    }

    this.uploader.onErrorItem = (item, res)=>{
      console.log("in error")
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


  deletePost(id){
    console.log('newsletter info ============ ', id)
    this.newsService.deleteNews(id)
    .subscribe(
      newsObjFromApi => {
        this.newsletter = newsObjFromApi;
        // this.router.navigate(['/newsletter'])
        location.reload();
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
