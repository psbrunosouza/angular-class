import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhoneItemComponent } from './create-phone-item.component';

describe('CreatePhoneItemComponent', () => {
  let component: CreatePhoneItemComponent;
  let fixture: ComponentFixture<CreatePhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePhoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
