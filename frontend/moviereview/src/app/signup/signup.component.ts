import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit {
  store;

  newuserform;
  claire: any = [];

  constructor(private api: ApiService, private router: Router) { 
    this.newuserform = {userName:"", passWord: "", checkPass: ""}
  }

  ngOnInit() {
    this.api.getAllUsers().subscribe(data =>{
      this.store = data;

      for(let x of this.store) {
        this.claire.push(x.userName);
      }
    })
  }

  registerUser(){
    var leon = this.newuserform.userName
    var ada = this.newuserform.passWord
    var checking = this.newuserform.checkPass

    for(var x = 0; this.claire.length; x++){
        if(leon == this.claire[x]){
          return window.alert("Username already taken! Please try another one")
        }
        else{
          console.log("username is accepted")
          if (ada != checking){
            return window.alert("Please ensure that the passwords match")
          }
          else{
            var chris = confirm("Proceed to add user?")
            if (chris == true){
              this.api.addUser(leon, ada).subscribe(data =>{
                console.log("success!")
              })
              window.alert("Success! You have successfully registered! Proceeding to login...")
              return this.router.navigate(['/login']).then(() => {window.location.reload();});
            }
            else{
              window.location.reload();
            }
          }
        }
    }
  }

}
