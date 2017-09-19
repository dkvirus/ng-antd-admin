import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOrgComponent } from './security-org.component';

describe('SecurityOrgComponent', () => {
  let component: SecurityOrgComponent;
  let fixture: ComponentFixture<SecurityOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
