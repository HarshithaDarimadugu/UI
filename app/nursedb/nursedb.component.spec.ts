import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedbComponent } from './nursedb.component';

describe('NursedbComponent', () => {
  let component: NursedbComponent;
  let fixture: ComponentFixture<NursedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursedbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
