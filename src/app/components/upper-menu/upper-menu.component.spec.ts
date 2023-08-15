import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperMenuComponent } from './upper-menu.component';

describe('UpperMenuComponent', () => {
  let component: UpperMenuComponent;
  let fixture: ComponentFixture<UpperMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperMenuComponent]
    });
    fixture = TestBed.createComponent(UpperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
