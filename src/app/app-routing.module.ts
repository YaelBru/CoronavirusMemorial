import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/overview/about' },
  {
    path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: '/overview/about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
