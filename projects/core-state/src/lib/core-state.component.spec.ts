import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreStateComponent } from './core-state.component';

describe('CoreStateComponent', () => {
  let component: CoreStateComponent;
  let fixture: ComponentFixture<CoreStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
