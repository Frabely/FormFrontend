import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishFormLabelComponent } from './finish-form-label.component';

describe('FinishFormLabelComponent', () => {
  let component: FinishFormLabelComponent;
  let fixture: ComponentFixture<FinishFormLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishFormLabelComponent]
    });
    fixture = TestBed.createComponent(FinishFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
