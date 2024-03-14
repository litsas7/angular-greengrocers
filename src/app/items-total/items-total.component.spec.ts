import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTotalComponent } from './items-total.component';

describe('ItemsTotalComponent', () => {
  let component: ItemsTotalComponent;
  let fixture: ComponentFixture<ItemsTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsTotalComponent]
    });
    fixture = TestBed.createComponent(ItemsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
