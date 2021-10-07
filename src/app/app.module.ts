import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from "./services/post.service";
import { CommentService } from "./services/comment.service";
import { CommentComponent } from './components/comment/comment.component';
import { NotificationService } from "./services/notification.service";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService, CommentService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
