import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post!: Post;
  id!: number;
  categories!: Category[];

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  onSubmit() {
    this.postService.updatePost(this.post).subscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => (this.id = params?.['id'])
    );
    this.postService
      .getPost(this.id)
      .pipe(
        catchError(() => {
          this.router.navigate(['/admin/posts']);
          return EMPTY;
        })
      )
      .subscribe((post: Post) => {
        this.post = post;
      });

    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }
}
