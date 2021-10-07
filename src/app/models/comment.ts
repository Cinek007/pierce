interface CommentPost {
  ID: number;
}

export interface Comment {
  ID: string;
  raw_content: string;
  date: string;
  post: CommentPost;
}
