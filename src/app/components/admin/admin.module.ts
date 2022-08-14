import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AdminDashboardComponent,
    PostsComponent,
    CategoriesComponent,
    PostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
