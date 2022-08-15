import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { PostShortComponent } from './components/post-short/post-short.component';
import { CategoryShortComponent } from './components/category-short/category-short.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AdminDashboardComponent,
    PostsComponent,
    CategoriesComponent,
    PostComponent,
    AddPostComponent,
    ButtonComponent,
    PostShortComponent,
    CategoryShortComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
