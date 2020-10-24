import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexListingComponent } from './spacex-listing.component';

describe('SpacexListingComponent', () => {
  let component: SpacexListingComponent;
  let fixture: ComponentFixture<SpacexListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
