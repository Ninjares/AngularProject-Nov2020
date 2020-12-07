import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCompleteComponent } from './v-complete.component';

describe('VCompleteComponent', () => {
  let component: VCompleteComponent;
  let fixture: ComponentFixture<VCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
