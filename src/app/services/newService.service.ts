import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

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
    return this.http.get(`${environment.apiBase}/api/newsletter`)
      .map((res)=> res.json())
      .catch(this.handleError);
  }

  createNews(){
    return this.http.get(`${environment.apiBase}/api/newsletter/create`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  getNews(id){
    return this.http.get(`${environment.apiBase}/api/newsletter/${id}`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);
    
  }

  updateNews(id, data){
    return this.http.post(`${environment.apiBase}/api/newsletter/${id}/update`, data, { withCredentials: true })
    .map((res)=> res.json())    
  }

  deleteNews(id){
    return this.http.post(`${environment.apiBase}/api/newsletter/${id}/delete`, { withCredentials: true })
    .map((res)=> res.json())
    .catch(this.handleError);

  }

}
