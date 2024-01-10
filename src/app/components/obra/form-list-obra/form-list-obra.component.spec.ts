import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListObraComponent } from './form-list-obra.component';

describe('FormListObraComponent', () => {
  let component: FormListObraComponent;
  let fixture: ComponentFixture<FormListObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListObraComponent]
    });
    fixture = TestBed.createComponent(FormListObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
