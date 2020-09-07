import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['../app.component.css']
})
export class AddCommentComponent {

  movienametoadd: string; //to get movie name from params
  subscribetoadd;
  comments;
  userna; //to show username from session storage and add to databse

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.data);
    this.comments = {comment: ''};
  }

  ngOnInit() {
    this.subscribetoadd = this.route.params.subscribe(params =>{
      this.movienametoadd = params['moviename'];
      console.log("movie name: " + this.movienametoadd);
    })
    this.userna = sessionStorage.getItem("userId")
  }

   // create function
   addComment = () =>{
    console.log(this.movienametoadd);
    console.log(this.userna)
    console.log(this.comments);
    this.apiService.addComment(this.comments, this.userna, this.movienametoadd).subscribe(
      data => {
        // this.movies.push(data)
        console.log(this.movienametoadd);
        console.log(this.comments)
        window.alert("comment has been posted!")
        window.history.back();
      },
    );
  }

}
