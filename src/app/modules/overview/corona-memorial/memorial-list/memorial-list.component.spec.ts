import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialListComponent } from './memorial-list.component';

describe('MemorialListComponent', () => {
  let component: MemorialListComponent;
  let fixture: ComponentFixture<MemorialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
