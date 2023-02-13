import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service'

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit, OnDestroy {

  myPostsToShow: Post[] = [];
  isFetching = false;
  private errorMessage: Subscription;

  constructor(private httpService: PostsService) {}
  
  ngOnInit(): void {
    this.errorMessage = this.httpService.error.subscribe(e => console.log('mi mensaje de error: ', e));
  }
  
  onCreatePost(postData: Post) {
    this.httpService.createPost(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.httpService.fetchPosts()
      .subscribe(posts => {
        this.myPostsToShow = posts;
        this.isFetching = false;
      });
  }

  onClearPosts() {
    this.httpService.clearPosts()
      .subscribe();
  }

  ngOnDestroy(): void {
    this.errorMessage.unsubscribe();
  }
}
