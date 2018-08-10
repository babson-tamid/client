import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/newService.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import {FormsModule} from '@angular/forms';
import { FileUploader } from "ng2-file-upload";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-newsletter-edit',
  templateUrl: './newsletter-edit.component.html',
  styleUrls: ['./newsletter-edit.component.css']
})
export class NewsletterEditComponent implements OnInit {

  newsletter: any = {};
  updatedNewsletter:any = {};
  newsCreator: String;
  newsTitle: String;
  newsDesc: String;

  constructor(
    private newsService: NewsServiceService, 
    private router:Router,
    public myAuthService: AuthService,
    public myRoute: ActivatedRoute
  ) { }


  updatePost(theId, dataToSend) {
      const formInfo = dataToSend.form.controls;
      this.newsCreator = formInfo.creator.value;
      this.newsTitle = formInfo.title.value;
      this.newsDesc = formInfo.description.value;
      this.sendUpdatesToApi(theId)  
  }

  sendUpdatesToApi(theId){
    this.updatedNewsletter = {
      creator: this.newsletter.creator,
      title: this.newsletter.title,
      description: this.newsletter.description
    }
    this.newsService.updateNews(theId, this.updatedNewsletter)
    .toPromise()
    .then( () => {
      this.router.navigate(['/newsletter']);
    })
    .catch( err => { 
      console.log('the err in the update: ', err);
      err.json()
    })
  }

  getSingleNews(id){
    this.newsService.getNews(id)
    .toPromise()
    .then( oneNewsFromDB => {
      console.log('is this news: ', oneNewsFromDB)
      this.newsletter = oneNewsFromDB;
    } )
    .catch( err => console.log(err) )
  }


  // deletePost() {
  //   this.newsService.deleteNews()
  //     .subscribe(
  //       newsObjFromApi => {
  //         this.newsletter = newsObjFromApi;
  //         this.router.navigate(['/newsletter'])
  //       }
  //     )
  // }


  ngOnInit() {
    this.myAuthService.isLoggedIn()
      .toPromise()
      .then((user) => {
        console.log('the user: ', user)
      })
      .catch(err => console.log('err is: ', err))
      this.myRoute.params.subscribe(params => {
        this.getSingleNews(params['id'])
      })
  }


}
