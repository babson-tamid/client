import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: Http) {}
  
  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }
  
  
  
  newsletterList(){
    return this.http.get(`http://localhost:3000/api/newsletter`)
      .map((res)=> res.json())
      .catch(this.handleError);
  }

  createNews(){
    return this.http.get(`http://localhost:3000/api/newsletter/create`)
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  getNews(){
    return this.http.get(`http://localhost:3000/api/newsletter/:id`)
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  updateNews(){
    return this.http.get(`http://localhost:3000/api/newsletter/:id/update`)
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  deleteNews(){
    return this.http.get(`http://localhost:3000/api/newsletter/:id/delete`)
    .map((res)=> res.json())
    .catch(this.handleError);

  }

}
