import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['../app.component.css']
})
export class EditcommentComponent implements OnInit {
  getusername; //to get username from sessionStorage
  commentid: string; //to get comment id from params
  subscribeparams: any; //to get params
  comment; //store and display comment from database to variable
  dbuser; //store username from database to compare
  dbmoviename; //store moviename and display
  dbid; //store comment id from database

  editedComment; //capture comment edit


  constructor(private route: ActivatedRoute, private apiService: ApiService,  private router: Router) {
    this.subscribeparams = this.route.params.subscribe(params =>{
      this.commentid = params['commentid'];
      console.log("moviename gathered: " + this.commentid);
      
      this.apiService.getOneComment(this.commentid).subscribe(data =>{
        
        this.comment = data.comment
        this.dbuser = data.commentUser
        this.dbmoviename = data.commentMovie
        this.dbid = data.id
        console.log(data.commentUser)
        console.log(this.dbuser)
      })
    })

    this.editedComment = {comment: ""}
   }



  ngOnInit() {
    this.getusername = sessionStorage.getItem("userId")
  }

  addEditToDb(){
    var s = confirm("are you sure you want to make edits to your comments?")
    if (s == true){
      console.log(this.dbid)
      console.log(this.editedComment.comment)
      console.log(this.getusername)
      console.log(this.dbmoviename)
      if (this.dbuser == this.getusername){
        this.apiService.editComment(this.dbid, this.editedComment.comment, this.getusername, this.dbmoviename).subscribe(data =>{
          window.alert("comment has been changed, " + this.getusername);

          return this.router.navigate(['/home'])
            .then(() => {
              window.location.reload();
            });
        })
      }
      else{
        window.alert("how did you even get in?")
      }
    }
    else{
      console.log("no changes were made")
      return this.router.navigate(['/home'])
    }

  }


}
