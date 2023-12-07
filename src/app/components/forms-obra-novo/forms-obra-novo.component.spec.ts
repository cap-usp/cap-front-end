import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsObraNovoComponent } from './forms-obra-novo.component';

describe('FormsObraNovoComponent', () => {
  let component: FormsObraNovoComponent;
  let fixture: ComponentFixture<FormsObraNovoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsObraNovoComponent]
    });
    fixture = TestBed.createComponent(FormsObraNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
