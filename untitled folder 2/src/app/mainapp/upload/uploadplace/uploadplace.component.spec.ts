import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadplaceComponent } from './uploadplace.component';

describe('UploadplaceComponent', () => {
  let component: UploadplaceComponent;
  let fixture: ComponentFixture<UploadplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
