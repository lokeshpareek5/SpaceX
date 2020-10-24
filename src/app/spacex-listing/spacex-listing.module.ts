import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexListingRoutingModule } from './spacex-listing-routing.module';
import { SpacexListingComponent } from './spacex-listing.component';
import { SpacexListingService } from './SpacexListingService';


@NgModule({
  declarations: [SpacexListingComponent],
  imports: [
    CommonModule,
    SpacexListingRoutingModule
  ],
  providers: [
    SpacexListingService
  ]
})
export class SpacexListingModule { }
