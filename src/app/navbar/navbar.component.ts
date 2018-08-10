import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  theActualUser:any;
  

  theError:any;


  constructor(private authService: AuthService, private router:Router) { }
  
  
  
  
  logMeOut(){
    this.authService.logout()
    .subscribe(res =>{this.theActualUser = null})
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  
  this.authService.isLoggedIn()
  .toPromise()
  .then( user => {
    this.theActualUser = user;
    console.log('helooooo: ', user)
  } )
  .catch( err => console.log('the err: ', err) )
  }

}
