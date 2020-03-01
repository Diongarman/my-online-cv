import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProjectDetailsComponent } from './api-project-details.component';

describe('ApiProjectDetailsComponent', () => {
  let component: ApiProjectDetailsComponent;
  let fixture: ComponentFixture<ApiProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
