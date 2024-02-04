import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraIndividualComponent } from './obra-individual.component';

describe('ObraIndividualComponent', () => {
  let component: ObraIndividualComponent;
  let fixture: ComponentFixture<ObraIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraIndividualComponent]
    });
    fixture = TestBed.createComponent(ObraIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
