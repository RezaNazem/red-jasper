import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedJasperComponent } from './red-jasper.component';

describe('RedJasperComponent', () => {
  let component: RedJasperComponent;
  let fixture: ComponentFixture<RedJasperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedJasperComponent]
    });
    fixture = TestBed.createComponent(RedJasperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
