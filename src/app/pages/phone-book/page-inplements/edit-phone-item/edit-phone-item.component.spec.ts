import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhoneItemComponent } from './edit-phone-item.component';

describe('EditPhoneItemComponent', () => {
  let component: EditPhoneItemComponent;
  let fixture: ComponentFixture<EditPhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
