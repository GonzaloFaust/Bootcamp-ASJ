import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayTablaComponent } from './hay-tabla.component';

describe('HayTablaComponent', () => {
  let component: HayTablaComponent;
  let fixture: ComponentFixture<HayTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HayTablaComponent]
    });
    fixture = TestBed.createComponent(HayTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
