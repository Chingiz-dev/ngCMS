import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }
}
