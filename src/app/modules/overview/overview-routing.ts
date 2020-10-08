import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CoronaStatusComponent} from './corona-status/corona-status.component';
import {CoronaMemorialComponent} from './corona-memorial/corona-memorial.component';


const routes: Routes = [
  {
    path: '', component: OverviewComponent, children: [
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'coronavirus-status', component: CoronaStatusComponent},
      {path: 'memorial', component: CoronaMemorialComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {
}
