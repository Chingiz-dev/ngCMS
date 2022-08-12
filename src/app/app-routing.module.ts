import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GuestModule } from './components/guest/guest.module';
import { AdminModule } from './components/admin/admin.module';

const routes: Routes = [
  {
    path: 'guest',
    loadChildren: () =>
      import('./components/guest/guest.module').then(
        (m: { GuestModule: GuestModule }) => m.GuestModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then(
        (ma: { AdminModule: AdminModule }) => ma.AdminModule
      ),
  },
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
