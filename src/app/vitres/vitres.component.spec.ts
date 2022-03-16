import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitresComponent } from './vitres.component';

describe('VitresComponent', () => {
  let component: VitresComponent;
  let fixture: ComponentFixture<VitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
