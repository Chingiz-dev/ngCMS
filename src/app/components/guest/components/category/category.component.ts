import { CategoriesService } from 'src/app/services/categories.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/post';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id!: string;
  posts: Post[] = [];
  description?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params?.['id'];

      this.categoryService.getCategory(this.id).subscribe((categories: Category[]) => {
        this.description = categories[0].description;
      });

      this.postService
        .getPostsByCategory(this.id)
        .subscribe((posts: Post[]) => {
          this.posts = [...posts];
        });
    });
  }
}
