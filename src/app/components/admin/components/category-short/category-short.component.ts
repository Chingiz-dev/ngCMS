import { Category } from 'src/app/model/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-short',
  templateUrl: './category-short.component.html',
  styleUrls: ['./category-short.component.scss'],
})
export class CategoryShortComponent implements OnInit {
  @Input() category!: Category;
  @Output() onDeleteCategory: EventEmitter<Category> = new EventEmitter();
  @Output() onUpdateCategory: EventEmitter<Category> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;
  editCategory: boolean = false;
  title!: string;
  description!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.category.title;
    this.description = this.category.description;
  }

  onDelete(category: Category) {
    this.onDeleteCategory.emit(category);
  }

  onSubmit() {
    this.category.title = this.title;
    this.category.description = this.description;
    this.onUpdateCategory.emit(this.category);
  }

  toggleEditCategory() {
    this.editCategory = !this.editCategory;
  }
}
