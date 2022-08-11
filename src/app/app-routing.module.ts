import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DumbComponent } from './components/dumb/dumb.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GuestModule } from './components/guest/guest.module';

const routes: Routes = [
  { path: 'dumb', component: DumbComponent },
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  {
    path: 'guest',
    loadChildren: () =>
      import('./components/guest/guest.module').then(
        (m: { GuestModule: GuestModule }) => m.GuestModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
