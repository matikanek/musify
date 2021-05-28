import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseListListComponent } from './browse-list-list.component';

describe('BrowseListListComponent', () => {
  let component: BrowseListListComponent;
  let fixture: ComponentFixture<BrowseListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
