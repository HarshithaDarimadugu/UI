import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PprescComponent } from './ppresc.component';

describe('PprescComponent', () => {
  let component: PprescComponent;
  let fixture: ComponentFixture<PprescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PprescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PprescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
