import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postService.getPostsByViews().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
