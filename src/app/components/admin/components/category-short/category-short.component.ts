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
  faTimes = faTimes;
  faEdit = faEdit;

  constructor() {}

  ngOnInit(): void {}

  onDelete(category: Category) {
    this.onDeleteCategory.emit(category);
  }
}
