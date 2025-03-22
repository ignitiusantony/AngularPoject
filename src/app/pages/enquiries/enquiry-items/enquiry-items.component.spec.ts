import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryItemsComponent } from './enquiry-items.component';

describe('EnquiryItemsComponent', () => {
  let component: EnquiryItemsComponent;
  let fixture: ComponentFixture<EnquiryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnquiryItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnquiryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
