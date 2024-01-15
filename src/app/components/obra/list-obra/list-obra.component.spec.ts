import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObraComponent } from './list-obra.component';

describe('ListObraComponent', () => {
  let component: ListObraComponent;
  let fixture: ComponentFixture<ListObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListObraComponent]
    });
    fixture = TestBed.createComponent(ListObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
