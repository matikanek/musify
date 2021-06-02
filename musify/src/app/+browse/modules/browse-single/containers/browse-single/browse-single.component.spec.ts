import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSingleComponent } from './browse-single.component';

describe('BrowseSingleComponent', () => {
  let component: BrowseSingleComponent;
  let fixture: ComponentFixture<BrowseSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
