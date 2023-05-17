import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpatientComponent } from './vpatient.component';

describe('VpatientComponent', () => {
  let component: VpatientComponent;
  let fixture: ComponentFixture<VpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
