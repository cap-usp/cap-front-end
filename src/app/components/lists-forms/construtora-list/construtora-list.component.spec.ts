import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutoraListComponent } from './construtora-list.component';

describe('ConstrutoraListComponent', () => {
  let component: ConstrutoraListComponent;
  let fixture: ComponentFixture<ConstrutoraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstrutoraListComponent]
    });
    fixture = TestBed.createComponent(ConstrutoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
