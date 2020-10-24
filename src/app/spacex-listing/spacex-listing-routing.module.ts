import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacexListingComponent } from './spacex-listing.component';

const routes: Routes = [{ path: '', component: SpacexListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacexListingRoutingModule { }
