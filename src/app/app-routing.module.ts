import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  {
    path: 'error-page',
    component: ErrorPageComponent,
    data: { message: 'Page Not Found' },
  },
  { path: '**', redirectTo: '/error-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
