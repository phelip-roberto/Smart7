import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalProfileComponent } from './terminal-profile.component';

describe('TerminalProfileComponent', () => {
  let component: TerminalProfileComponent;
  let fixture: ComponentFixture<TerminalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
