import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsObraComponent } from './forms-obra.component';

describe('FormsObraComponent', () => {
  let component: FormsObraComponent;
  let fixture: ComponentFixture<FormsObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsObraComponent]
    });
    fixture = TestBed.createComponent(FormsObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
