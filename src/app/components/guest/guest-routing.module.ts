import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { GuestDashboardComponent } from './components/guest-dashboard/guest-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: GuestDashboardComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostComponent },
      { path: 'categories/:id', component: CategoryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class GuestRoutingModule {}
