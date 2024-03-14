import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCartComponent } from './items-cart.component';

describe('ItemsCartComponent', () => {
  let component: ItemsCartComponent;
  let fixture: ComponentFixture<ItemsCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsCartComponent]
    });
    fixture = TestBed.createComponent(ItemsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
