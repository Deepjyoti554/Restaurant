import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderComponent } from './addorder.component';

describe('AddorderComponent', () => {
  let component: AddorderComponent;
  let fixture: ComponentFixture<AddorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddorderComponent]
    });
    fixture = TestBed.createComponent(AddorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
