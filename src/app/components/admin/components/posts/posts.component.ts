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
  showAddPost: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsList().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  toggleAddPost() {
    this.showAddPost = !this.showAddPost;
  }

  addNewPost(post: Post) {
    this.postService
      .addPost(post)
      .subscribe((post) => (this.posts = [...this.posts, post]));
  }

  deletePost(post: Post) {
    this.postService
      .deletePost(post)
      .subscribe(
        () => (this.posts = this.posts.filter((item) => item.id !== post.id))
      );
  }
}
