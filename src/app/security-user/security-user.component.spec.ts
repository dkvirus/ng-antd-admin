import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityUserComponent } from './security-user.component';

describe('SecurityUserComponent', () => {
  let component: SecurityUserComponent;
  let fixture: ComponentFixture<SecurityUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
