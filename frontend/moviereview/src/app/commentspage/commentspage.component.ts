import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-commentspage',
  templateUrl: './commentspage.component.html',
  styleUrls: ['./commentspage.component.css']
})
export class CommentspageComponent {
  moviename: string; //to get movie name from params
  subscribeparams: any;
  post; //store api data into object array
  getusername

  commentArray: any = []; //store matched comments into an array to display it in the html

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.data);
    
    this.getusername = sessionStorage.getItem("userId")
   }

  ngOnInit(movieid: string) {
    
    let arrid: Array<string> = []; //array to store product id to match
    let arrcomment: Array<string> = []; //array to store product id to match
    let arruser: Array<string> = []; //array to store usernames
    let arrmovie: Array<string> = []; //array to store comments
    
    this.apiService.getAllComments().subscribe(posts => {
      this.post = posts;

      for(let enqui of this.post) {
        arrid.push(enqui.id);
        arrcomment.push(enqui.comment);
        arruser.push(enqui.commentUser);
        arrmovie.push(enqui.commentMovie); //we're gonna use this to compare
      }
      console.log(arrmovie);


      this.subscribeparams = this.route.params.subscribe(params =>{
        this.moviename = params['moviename'];
        console.log("moviename gathered: " + this.moviename);

        movieid = this.moviename

        for (var i = 0 ; arrmovie.length; i++){
          if (this.moviename == arrmovie[i]){
            var commenttext = "match successful"
            console.log(commenttext);
            this.commentArray.push(({"commentID": arrid[i],"commentMovie": arrmovie[i], "comment": arrcomment[i], "userName": arruser[i]}));
            // this.test.push([arr[i], arrdate[i], arrdesc[i], arruser[i]]);
            console.log(arrmovie[i]);
            console.log(this.post);
            console.log(this.commentArray);
          }
          if (i == arrmovie.length)
          {
            return console.log("no avail comments");
          }
        }
      });
    })
  }

  deleteCommentar(id){
    var commentid = id
    var t = confirm("Are you sure you want to delete your comment?");
    if (t == true){
      console.log(commentid);
      this.apiService.deleteComment(commentid).subscribe(data =>{
        window.alert("your comment has been deleted")
        window.location.reload();
      })
    }
    else{
      return console.log("comment not deleted")
    }
  }

}
