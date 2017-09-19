import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRoleComponent } from './security-role.component';

describe('SecurityRoleComponent', () => {
  let component: SecurityRoleComponent;
  let fixture: ComponentFixture<SecurityRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
