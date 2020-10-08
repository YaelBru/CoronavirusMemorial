import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialPageComponent } from './memorial-page.component';

describe('MemorialPageComponent', () => {
  let component: MemorialPageComponent;
  let fixture: ComponentFixture<MemorialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
