import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  // @Output() onAddPost = new EventEmitter<Post>();
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  addPostForm!: FormGroup;
  categories: Category[] = [];
  post?: Post;

  constructor(private categoriesService: CategoriesService, private postService: PostService) {}


  submitAddPost() {
    const newPost: Post = {
      title: this.addPostForm.get('title')!.value,
      category: this.addPostForm.get('category')!.value,
      description: this.addPostForm.get('description')!.value,
      author: this.addPostForm.get('author')!.value,
      text: this.addPostForm.get('text')!.value,
      views: 0
    }
    // this.onAddPost.emit(this.addPostForm.value);
    console.log('emmited', this.addPostForm.value);
    console.log('emmited', newPost);

    this.onAddPost.emit(newPost);
    // this.postService.addPost(newPost).subscribe((post) => {
    //   console.log(post);
    //   this.post = post;
    // });
    // this.addPostForm.reset();
  }

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });

    this.addPostForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      category: new FormControl(this.categories[0]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }
}
