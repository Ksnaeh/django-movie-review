import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://localhost:8000/api"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(this.baseurl + "/movies/", {headers: this.httpHeaders})
  }

  getAllComments(): Observable<any>{
    return this.http.get(this.baseurl + "/comments/", {headers: this.httpHeaders})
  }

  getOneComment(id): Observable<any>{
    console.log("backend id: " + id)
    return this.http.get(this.baseurl + "/comments/" + id + "/", {headers: this.httpHeaders})
  }

  addComment(comment, useridentitet, moviename): Observable<any>{
    const body = {comment: comment.comment, commentUser: useridentitet, commentMovie: moviename,};
    console.log(body);
    return this.http.post(this.baseurl + "/comments/", body, {headers: this.httpHeaders} )
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.baseurl + "/users/", {headers: this.httpHeaders})
  }

  //add user
  addUser(uname, pword): Observable<any>{
    const body = {userName: uname, userPassword: pword}
    return this.http.post(this.baseurl + "/users/", body, {headers: this.httpHeaders})
  }

  //delete comment
  deleteComment(id): Observable<any>{
    return this.http.delete(this.baseurl + '/comments/' + id + '/', {headers: this.httpHeaders});
  }

  //edit comment
  editComment(id, editcomment, useridentity, movie): Observable<any>{
    const body = {comment: editcomment, commentUser: useridentity, commentMovie: movie }
    return this.http.put(this.baseurl + "/comments/" + id + "/", body, {headers: this.httpHeaders})
  }
}
