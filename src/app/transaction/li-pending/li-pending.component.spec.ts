import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiPendingComponent } from './li-pending.component';

describe('LiPendingComponent', () => {
  let component: LiPendingComponent;
  let fixture: ComponentFixture<LiPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
