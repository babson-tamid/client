import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { FileUploadModule } from "ng2-file-upload";
import { UserDetailsComponent } from './user-details/user-details.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsServiceService } from './services/newService.service';



const routes: Routes = [
  {
    path:'userDetails',
    component: UserDetailsComponent
  },
  {
    path:'',
    component: UserComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'apply',
    component: ApplyComponent
  },
  {
    path:'newsletter',
    component: NewsletterComponent

  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ApplyComponent,
    UserDetailsComponent,
    NewsletterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [AuthService, NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
