import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {


  constructor(private authService: AuthService) { }

  applyNow(){
    
  }

  ngOnInit() {
  }

}
