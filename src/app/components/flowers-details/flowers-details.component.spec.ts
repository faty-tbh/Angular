import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersDetailsComponent } from './flowers-details.component';

describe('FlowersDetailsComponent', () => {
  let component: FlowersDetailsComponent;
  let fixture: ComponentFixture<FlowersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
