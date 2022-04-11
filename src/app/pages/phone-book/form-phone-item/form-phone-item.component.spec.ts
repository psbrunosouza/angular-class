import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhoneItemComponent } from './form-phone-item.component';

describe('CreatePhoneItemComponent', () => {
  let component: FormPhoneItemComponent;
  let fixture: ComponentFixture<FormPhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPhoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
