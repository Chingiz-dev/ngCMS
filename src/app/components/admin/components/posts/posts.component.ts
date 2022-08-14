import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsList().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  addNewPost(post: any) {
    console.log('trying to add post');

    // this.postService.addPost(post).subscribe((post) => ( console.log(post)));
    // this.postService.addPost(post).subscribe((post) => (this.posts.push(post)));
  }
}
