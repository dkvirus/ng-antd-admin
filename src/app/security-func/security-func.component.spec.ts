import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFuncComponent } from './security-func.component';

describe('SecurityFuncComponent', () => {
  let component: SecurityFuncComponent;
  let fixture: ComponentFixture<SecurityFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
