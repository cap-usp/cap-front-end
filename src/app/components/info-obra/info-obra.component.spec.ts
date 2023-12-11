import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoObraComponent } from './info-obra.component';

describe('InfoObraComponent', () => {
  let component: InfoObraComponent;
  let fixture: ComponentFixture<InfoObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoObraComponent]
    });
    fixture = TestBed.createComponent(InfoObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
