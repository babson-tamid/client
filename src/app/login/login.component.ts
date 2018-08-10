import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: any = {};

  theActualUser:any = {
    email:'',
    password: '',
    name:'',
    gradDate:'',
    phoneNum:''

  }
  

  constructor(private authService: AuthService, private router: Router) { }

  tryToLogIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe((res)=>{
       this.theActualUser = res
       location.reload()
      this.router.navigate(['/'])

    });
  
    
  }


  ngOnInit() {
  }

}
