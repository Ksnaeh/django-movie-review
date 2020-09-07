import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{movieName: 'test'}];
  sessionStage: string;

  constructor(private api:ApiService){
    this.getMovies();
  }

  getMovies=()=>{
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      }
    )
  }

  ngOnInit() {
    this.sessionStage = sessionStorage.getItem("userId");
    if (this.sessionStage == null){  
      document.getElementById("hideLogout").style.visibility = 'hidden';
      document.getElementById("hideLogin").style.visibility = 'visible';
      document.getElementById("hideSignUp").style.visibility = 'visible';
      
    } 
    else{
      document.getElementById("hideLogout").style.visibility = 'visible';
      document.getElementById("hideLogin").remove();
      document.getElementById("hideSignUp").remove();
    } 
  }
}
