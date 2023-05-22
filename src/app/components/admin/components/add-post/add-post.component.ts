import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  addPostForm!: UntypedFormGroup;
  categories: Category[] = [];
  post?: Post;

  constructor(
    private categoriesService: CategoriesService,
    private postService: PostService
  ) {}

  submitAddPost() {
    const newPost: Post = {
      title: this.addPostForm.get('title')!.value,
      category: this.addPostForm.get('category')!.value,
      description: this.addPostForm.get('description')!.value,
      author: this.addPostForm.get('author')!.value,
      text: this.addPostForm.get('text')!.value,
      views: 0,
    };
    this.onAddPost.emit(newPost);
    this.addPostForm.reset();
    this.addPostForm.controls['category'].setValue(
      this.categories[0].title,
      { onlySelf: true }
    );
  }

  ngOnInit(): void {
    this.addPostForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      category: new UntypedFormControl([Validators.required]),
      description: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      author: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      text: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    this.categoriesService
    .getCategories()
    .subscribe((categories: Category[]) => {
      this.categories = categories;
      this.addPostForm.controls['category'].setValue(
        this.categories[0].title,
        { onlySelf: true }
      );
    });
  }
}
