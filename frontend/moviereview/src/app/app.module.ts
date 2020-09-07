import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommentspageComponent } from './commentspage/commentspage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { routing } from './app-routing.module';
import { ApiService } from './api.service';
import { HomepageComponent } from './homepage/homepage.component';
import { EditcommentComponent } from './editcomment/editcomment.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CommentspageComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    AddCommentComponent,
    HomepageComponent,
    EditcommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
