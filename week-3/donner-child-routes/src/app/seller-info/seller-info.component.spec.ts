/*============================================
; Title: seller-info.component.spec.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  seller-info.component.spec.ts
;===========================================
*/


// start program

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInfoComponent } from './seller-info.component';

describe('SellerInfoComponent', () => {
  let component: SellerInfoComponent;
  let fixture: ComponentFixture<SellerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// end program