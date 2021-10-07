import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from '../models/comment';

type CommentResponse = {
  comments: Comment[];
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/';

  constructor(private http: HttpClient) { }

  public getCommentsFor(postId: number, amount: number): Observable<Comment> {
    const url = `${this._baseUrl}posts/${postId}/replies/?number=${amount}`;
    return this.http.get<CommentResponse>(url).pipe(
      map(data => data.comments[0])
    );
  }
}
