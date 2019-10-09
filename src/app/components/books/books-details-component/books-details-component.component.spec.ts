import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailsComponentComponent } from './books-details-component.component';

describe('BooksDetailsComponentComponent', () => {
  let component: BooksDetailsComponentComponent;
  let fixture: ComponentFixture<BooksDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
