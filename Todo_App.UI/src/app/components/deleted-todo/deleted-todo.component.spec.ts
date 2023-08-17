import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTodoComponent } from './deleted-todo.component';

describe('DeletedTodoComponent', () => {
  let component: DeletedTodoComponent;
  let fixture: ComponentFixture<DeletedTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedTodoComponent]
    });
    fixture = TestBed.createComponent(DeletedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
