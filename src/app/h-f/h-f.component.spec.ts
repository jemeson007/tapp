import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFComponent } from './h-f.component';

describe('HFComponent', () => {
  let component: HFComponent;
  let fixture: ComponentFixture<HFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
