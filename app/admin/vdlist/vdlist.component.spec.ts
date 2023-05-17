import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdlistComponent } from './vdlist.component';

describe('VdlistComponent', () => {
  let component: VdlistComponent;
  let fixture: ComponentFixture<VdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
