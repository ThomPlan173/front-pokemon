import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurFormComponent } from './dresseur-form.component';

describe('DresseurFormComponent', () => {
  let component: DresseurFormComponent;
  let fixture: ComponentFixture<DresseurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresseurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
