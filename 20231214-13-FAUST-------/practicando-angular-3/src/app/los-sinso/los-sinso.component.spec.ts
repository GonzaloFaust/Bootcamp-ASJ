import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosSinsoComponent } from './los-sinso.component';

describe('LosSinsoComponent', () => {
  let component: LosSinsoComponent;
  let fixture: ComponentFixture<LosSinsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LosSinsoComponent]
    });
    fixture = TestBed.createComponent(LosSinsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
