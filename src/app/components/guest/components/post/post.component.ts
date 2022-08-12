import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from '../../../../services/post.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post?: Post;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => (this.id = params?.['id'])
    );
    this.postService.getPost(this.id).pipe(
      catchError(()=>{
        this.router.navigate(['/guest/posts']);
        return EMPTY;
      })
    ).subscribe((post: Post) => {
      this.post = post;
      post.views++;
      this.postService.updatePost(post).subscribe();
    });
  }
}
