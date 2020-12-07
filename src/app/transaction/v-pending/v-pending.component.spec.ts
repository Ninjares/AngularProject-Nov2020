import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPendingComponent } from './v-pending.component';

describe('VPendingComponent', () => {
  let component: VPendingComponent;
  let fixture: ComponentFixture<VPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
