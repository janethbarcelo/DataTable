import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTablaComponent } from './component-tabla.component';

describe('ComponentTablaComponent', () => {
  let component: ComponentTablaComponent;
  let fixture: ComponentFixture<ComponentTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTablaComponent]
    });
    fixture = TestBed.createComponent(ComponentTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
