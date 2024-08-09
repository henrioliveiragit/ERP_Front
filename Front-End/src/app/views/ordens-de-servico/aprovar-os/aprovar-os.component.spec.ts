import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarOsComponent } from './aprovar-os.component';

describe('AprovarOsComponent', () => {
  let component: AprovarOsComponent;
  let fixture: ComponentFixture<AprovarOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprovarOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
