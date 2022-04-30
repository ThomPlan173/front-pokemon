import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurComponent } from './dresseur.component';

describe('DresseurComponent', () => {
  let component: DresseurComponent;
  let fixture: ComponentFixture<DresseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
