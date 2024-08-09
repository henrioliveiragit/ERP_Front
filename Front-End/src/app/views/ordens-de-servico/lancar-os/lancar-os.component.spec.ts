import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarOsComponent } from './lancar-os.component';

describe('LancarOsComponent', () => {
  let component: LancarOsComponent;
  let fixture: ComponentFixture<LancarOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
