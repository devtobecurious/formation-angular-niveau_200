import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsJediComponent } from './starwars-jedi.component';

describe('StarwarsJediComponent', () => {
  let component: StarwarsJediComponent;
  let fixture: ComponentFixture<StarwarsJediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsJediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
