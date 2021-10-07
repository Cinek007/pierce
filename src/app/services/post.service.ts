import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from "../models/post";

type PostsResponse = {
  posts: Post[];
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/';

  constructor(private http: HttpClient) { }

  public getPosts(amount: number): Observable<Post[]> {
    const url = `${this._baseUrl}posts/?number=${amount}`;
    return this.http.get<PostsResponse>(url).pipe(
      map(data => data.posts)
    );
  }
}
