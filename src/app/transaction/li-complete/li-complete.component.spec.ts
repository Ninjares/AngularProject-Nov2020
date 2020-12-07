import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCompleteComponent } from './li-complete.component';

describe('LiCompleteComponent', () => {
  let component: LiCompleteComponent;
  let fixture: ComponentFixture<LiCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
