import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilteringExample } from './userlist.component';

describe('UserlistComponent', () => {
  let component: TableFilteringExample;
  let fixture: ComponentFixture<TableFilteringExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilteringExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilteringExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
