import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.css']
})
export class HomepageComponent implements OnInit {

  movies = [{movieName: 'test'}];

  constructor(private api:ApiService) { 
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
  }

}
