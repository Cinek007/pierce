import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {Comment} from "../../models/comment";
import {NotificationService} from "../../services/notification.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input()
  public post?: Post;

  public comment?: Comment;

  constructor(
    private notificationService: NotificationService,
    private commentService: CommentService) { }

  ngOnInit(): void {
    this.notificationService.commentFetchSubject.subscribe((postId: number) => {
      if (this.post?.ID === postId) {
        this.commentService.getCommentsFor(postId, 1).subscribe((comment) => {
          this.comment = comment;
          this.notificationService.commentLoadedSubject.next(postId);
        });
      }
    })
  }

}
