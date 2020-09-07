import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentspageComponent } from './commentspage.component';

describe('CommentspageComponent', () => {
  let component: CommentspageComponent;
  let fixture: ComponentFixture<CommentspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
