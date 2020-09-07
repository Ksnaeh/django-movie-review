import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  getuserlastime;

  constructor(private router: Router) {
    this.getuserlastime = sessionStorage.getItem("userId")
    console.log("leaving " + this.getuserlastime + "'s account")
  }

  ngOnInit() {
    var logout = confirm("Are you sure you want to log out, " + this.getuserlastime+ "?")
    if (logout == true){
      sessionStorage.clear()
      window.alert("You have successfully logged out")
      return this.router.navigate(['/home']).then(() => {window.location.reload();});
    }
    else{
      return this.router.navigate(['/home'])
    }
  }

}
