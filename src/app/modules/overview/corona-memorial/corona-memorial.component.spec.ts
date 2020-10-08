import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaMemorialComponent } from './corona-memorial.component';

describe('CoronaMemorialComponent', () => {
  let component: CoronaMemorialComponent;
  let fixture: ComponentFixture<CoronaMemorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaMemorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaMemorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
