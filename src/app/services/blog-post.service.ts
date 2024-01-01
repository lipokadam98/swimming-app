import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Post {
  id: number,
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  posts: Post[] = [];
  private postsSubject = new BehaviorSubject<Post[]>([]);

  constructor() {
  }

  public loadPosts() {
    this.postsSubject.next(this.posts)
    return this.postsSubject.asObservable();
  }

  public addPost(title: string, content: string) {
    const post: Post = {
      id: 1,
      title: title,
      content: content
    }
    this.posts.push(post)
    console.log(this.posts)
    this.postsSubject.next(this.posts)
  }

  public deletePost() {

  }
}
