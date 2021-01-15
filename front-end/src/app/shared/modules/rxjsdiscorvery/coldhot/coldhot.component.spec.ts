import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdhotComponent } from './coldhot.component';

describe('ColdhotComponent', () => {
  let component: ColdhotComponent;
  let fixture: ComponentFixture<ColdhotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdhotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdhotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
