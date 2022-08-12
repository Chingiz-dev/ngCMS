import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { GuestDashboardComponent } from './components/guest-dashboard/guest-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: GuestDashboardComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'posts/post/:id', component: PostComponent },
      { path: 'posts/post', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'categories/:id', component: CategoryComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'authors/:id', component: AuthorComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class GuestRoutingModule {}
