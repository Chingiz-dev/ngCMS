import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  showAddCategory: boolean = false;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  toggleAddCategory() {
    this.showAddCategory = !this.showAddCategory;
  }

  addNewCategory(category: Category) {
    this.categoriesService
      .addCategory(category)
      .subscribe((category) => (this.categories = [...this.categories, category]));
  }

  deleteCategory(category: Category) {
    this.categoriesService
      .deleteCategory(category)
      .subscribe(
        () => (this.categories = this.categories.filter((item) => item.id !== category.id))
      );
  }

  updateCategory(category: Category) {
    this.categoriesService
      .updateCategory(category)
      .subscribe();
  }
}
