import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialAddComponent } from './memorial-add.component';

describe('MemorialAddComponent', () => {
  let component: MemorialAddComponent;
  let fixture: ComponentFixture<MemorialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
