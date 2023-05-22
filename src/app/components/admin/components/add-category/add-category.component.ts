import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @Output() onAddCategory: EventEmitter<Category> = new EventEmitter();
  addCategoryForm!: UntypedFormGroup;
  categories: Category[] = [];
  category?: Category;
  constructor(private categoriesService: CategoriesService) { }

  submitAddCategory() {
    const newCategory: Category = {
      title: this.addCategoryForm.get('title')!.value,
      description: this.addCategoryForm.get('description')!.value
    };
    this.onAddCategory.emit(newCategory);
    this.addCategoryForm.reset();
  }

  ngOnInit(): void {
    this.addCategoryForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(10),
      ])
    });
  }
}
