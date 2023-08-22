import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModuleComponent } from './products-module.component';

describe('ProductsModuleComponent', () => {
  let component: ProductsModuleComponent;
  let fixture: ComponentFixture<ProductsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModuleComponent]
    });
    fixture = TestBed.createComponent(ProductsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
