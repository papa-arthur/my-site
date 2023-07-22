import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmueComponent } from './resmue.component';

describe('ResmueComponent', () => {
  let component: ResmueComponent;
  let fixture: ComponentFixture<ResmueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResmueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResmueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
