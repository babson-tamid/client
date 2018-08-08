import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/newService.service';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {


  allUsers:any;

  



  constructor(
    private newsService: NewsServiceService, 
    private router:Router,
    public myAuthService: AuthService
  ) { }


  getList(){
    this.myAuthService.aboutUs()
    .subscribe((res)=>{
      this.allUsers = res.reverse();
  })
  }




  ngOnInit() {
    this.getList();
  }

}
