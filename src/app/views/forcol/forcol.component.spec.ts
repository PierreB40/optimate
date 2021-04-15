import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcolComponent } from './forcol.component';

describe('ForcolComponent', () => {
  let component: ForcolComponent;
  let fixture: ComponentFixture<ForcolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
