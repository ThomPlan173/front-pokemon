import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurDetailsComponent } from './dresseur-details.component';

describe('DresseurDetailsComponent', () => {
  let component: DresseurDetailsComponent;
  let fixture: ComponentFixture<DresseurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresseurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
