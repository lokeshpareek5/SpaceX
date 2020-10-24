import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexListingService } from "./SpacexListingService";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-spacex-listing',
  templateUrl: './spacex-listing.component.html',
  styleUrls: ['./spacex-listing.component.css'],
})
export class SpacexListingComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  data: any;
  years: any = [];

  constructor(public spacexListingService: SpacexListingService) {}

  ngOnInit(): void {
    this.years = [
      { id: 1, val: 2006 },
      { id: 2, val: 2007 },
      { id: 3, val: 2008 },
      { id: 4, val: 2009 },
      { id: 5, val: 2010 },
      { id: 6, val: 2011 },
      { id: 7, val: 2012 },
      { id: 8, val: 2013 },
      { id: 9, val: 2014 },
      { id: 10, val: 2015 },
      { id: 11, val: 2016 },
      { id: 12, val: 2017 },
      { id: 13, val: 2018 },
      { id: 14, val: 2019 },
      { id: 15, val: 2020 },
    ];
    this.getSpecexAllData();
  }

  getSpecexAllData() {
    this.spacexListingService.getAllSpecexListingData().pipe(takeUntil(this.unsubscribe$)).subscribe(
        (data) => {
          let response = data;
          console.log(response);
          this.data = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  lunchSuccess(val?) {
    if(val) {
      this.spacexListingService.getLunchSuccessData().pipe(takeUntil(this.unsubscribe$)).subscribe(
        (data) => {
          let response = data;
          console.log(response);
          this.data = response;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.getSpecexAllData();
    }
  }

  lunchAndLandingSucc(val?) {
    if(val) {
      this.spacexListingService.getLunchAndLandingSuccessData().pipe(takeUntil(this.unsubscribe$)).subscribe(
        (data) => {
          let response = data;
          console.log(response);
          this.data = response;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.getSpecexAllData();
    }
  }

  lunchAll() {
    this.spacexListingService.getAllLunch().pipe(takeUntil(this.unsubscribe$)).subscribe(
        (data) => {
          let response = data;
          console.log(response);
          this.data = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  ngOnDestroy() {
    if (this.unsubscribe$) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }
}
