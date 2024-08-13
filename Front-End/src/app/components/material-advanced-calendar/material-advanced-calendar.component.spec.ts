import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdvancedCalendarComponent } from './material-advanced-calendar.component';

describe('MaterialAdvancedCalendarComponent', () => {
  let component: MaterialAdvancedCalendarComponent;
  let fixture: ComponentFixture<MaterialAdvancedCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialAdvancedCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialAdvancedCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
