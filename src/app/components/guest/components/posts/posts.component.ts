import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/post';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  faEye = faEye;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsList().subscribe((posts: Post[])=> {this.posts = posts})
  }
}
