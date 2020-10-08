import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {OverviewRoutingModule} from '../overview/overview-routing';
import {SharedModule} from '../shared/shared/shared.module'

import {OverviewComponent} from './overview.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CoronaStatusComponent} from './corona-status/corona-status.component';
import {CoronaMemorialComponent} from './corona-memorial/corona-memorial.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {MemorialListComponent} from './corona-memorial/memorial-list/memorial-list.component';
import {MemorialAddComponent} from './corona-memorial/memorial-add/memorial-add.component';
import {MemorialPageComponent} from './corona-memorial/memorial-page/memorial-page.component';


@NgModule({
  declarations: [
    OverviewComponent,
    NavbarComponent,
    CoronaStatusComponent,
    CoronaMemorialComponent,
    ContactComponent,
    AboutComponent,
    MemorialListComponent,
    MemorialAddComponent,
    MemorialPageComponent
  ],
  entryComponents: [
    MemorialAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverviewRoutingModule,
    SharedModule
  ]
})
export class OverviewModule {
}
