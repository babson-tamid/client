import { Component, OnInit } from '@angular/core';
import { AuthService } from './/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor (
    public userInfo: AuthService
  ) {}
  
  ngOnInit() {
    this.userInfo.isLoggedIn()
    .catch((err) => {
      alert("Something Went Wrong!");
    });
  }


}