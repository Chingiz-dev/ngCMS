import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from '../admin/components/posts/posts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from '../admin/components/categories/categories.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostComponent },
      // { path: 'posts/posts', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'categories', component: CategoriesComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
