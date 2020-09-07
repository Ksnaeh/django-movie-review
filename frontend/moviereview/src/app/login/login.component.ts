import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService} from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
  keeper;

  auth; //to declare ngModel
  arruser: any = []; //store usernames in an array
  arrpassword: any = [];  //store paswswords in an array

  constructor(private api: ApiService, private router: Router) {
    console.log("warning: authentication page loaded!")
    this.auth = {userName:"", passWord: ""}
  }

  ngOnInit() {
    this.api.getAllUsers().subscribe(data =>{
      this.keeper = data;

      for(let x of this.keeper) {
        this.arruser.push(x.userName);
        this.arrpassword.push(x.userPassword);
      }
    })
  }

  signInFunction(){
    var captuser = this.auth.userName;
    var captpassword = this.auth.passWord;
    console.log(captuser)
    console.log(captpassword);

    console.log(this.arruser)

    for (var i = 0; i <= this.arruser.length; i++){
      console.log(this.arruser[i])
      if (captuser == this.arruser[i]){
        console.log("a user exists")
        if (captpassword == this.arrpassword[i]){
          sessionStorage.setItem("userId", captuser)
          console.log("login successful!")
          window.alert("Welcome back " + captuser + "!");
          return this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
        }
        else{
          return console.log("username/password entered incorrectly")
        }
      }
      else if (i == this.arruser.length-1){
        return console.log("no such user exists!")
      }
    }
  }

}
