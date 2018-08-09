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
    return this.http.get(`http://localhost:3000/api/newsletter/create`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  getNews(id){
    return this.http.get(`http://localhost:3000/api/newsletter/${id}`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  updateNews(id, data){
    console.log('in the news service data is: ', data, id)
    return this.http.post(`http://localhost:3000/api/newsletter/${id}/update`, data, { withCredentials: true })
    .map((res)=> res.json())
    // .catch(this.handleError);
    
  }

  deleteNews(id){
    return this.http.post(`http://localhost:3000/api/newsletter/${id}/delete`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);

  }

}
