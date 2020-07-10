import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktouserComponent } from './tasktouser.component';

describe('TasktouserComponent', () => {
  let component: TasktouserComponent;
  let fixture: ComponentFixture<TasktouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasktouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
