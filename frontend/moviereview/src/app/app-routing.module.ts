import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CommentspageComponent } from './commentspage/commentspage.component'
import {AddCommentComponent} from './add-comment/add-comment.component'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {LogoutComponent} from './logout/logout.component'
import {AppComponent} from './app.component'
import {HomepageComponent} from './homepage/homepage.component'
import {EditcommentComponent} from './editcomment/editcomment.component'


const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  //redirect to home page on load
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},


  {path: 'logout', component: LogoutComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'comments/:moviename', component: CommentspageComponent},
  {path: 'addcomment/:moviename', component: AddCommentComponent},
  {path: 'editcomment/:commentid', component: EditcommentComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
