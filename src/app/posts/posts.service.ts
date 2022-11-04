import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();
  getPost() {
    return [...this.posts];
  }

  getPostUpdateListner(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    console.log(post);

    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
