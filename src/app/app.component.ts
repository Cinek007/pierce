import {Component, OnInit} from '@angular/core';
import {PostService} from "./services/post.service";
import {CommentService} from "./services/comment.service";
import {Post} from "./models/post";
import {NotificationService} from "./services/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public posts: Post[] = [];
  public postsId: number[] = [];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.postService.getPosts(3).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.postsId = this.posts.map((post: Post) => post.ID);
    });

    this.notificationService.commentLoadedSubject.subscribe(() => this.fetchComment());
  }

  fetchComment() {
    const postId = this.postsId.shift();
    if (postId) {
      this.notificationService.commentFetchSubject.next(postId);
    }
  }
}
