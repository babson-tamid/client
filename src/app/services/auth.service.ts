import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  currentUser: any

  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  checkemail(user) {
    return this.http.post(`http://localhost:3000/api/checkemail`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  signup(user) {
    console.log('hey: ', user)
    return this.http.post(`http://localhost:3000/api/user/${user._id}/finish-signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  apply(user){
    return this.http.post(`http://localhost:3000/api/apply`, user)
    .map(res => res.json())
    .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {}, {withCredentials: true} )
      .map(res => res.json())
      .catch(this.handleError);
  }

  userDetails(user) {
    return this.http.post(`http://localhost:3000/api/userDetails/`, user, {withCredentials: true} )
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    console.log("checking if logged in from auth service")
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map((res) => {
        console.log("response when checking log in", res)
        return JSON.parse(res._body)
      })
      // .toPromise()
      // .then((resultFromAPI) => {
      //   console.log(" results after checking if logged in ========= ", resultFromAPI._body)
      //   this.currentUser = JSON.parse(resultFromAPI._body);
      //   return resultFromAPI;
      // })
      // .catch(this.handleError);
  }

  aboutUs(){
    return this.http.get(`http://localhost:3000/api/aboutpage`)
    .map(res => res.json())
    .catch(this.handleError);
  }



  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }




}