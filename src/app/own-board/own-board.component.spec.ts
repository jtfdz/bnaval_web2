import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnBoardComponent } from './own-board.component';

describe('OwnBoardComponent', () => {
  let component: OwnBoardComponent;
  let fixture: ComponentFixture<OwnBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
