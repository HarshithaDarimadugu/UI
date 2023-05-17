import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnlistComponent } from './vnlist.component';

describe('VnlistComponent', () => {
  let component: VnlistComponent;
  let fixture: ComponentFixture<VnlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
