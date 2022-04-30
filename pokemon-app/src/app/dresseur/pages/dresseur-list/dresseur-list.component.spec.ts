import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurListComponent } from './dresseur-list.component';

describe('DresseurListComponent', () => {
  let component: DresseurListComponent;
  let fixture: ComponentFixture<DresseurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresseurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
