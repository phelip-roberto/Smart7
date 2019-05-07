import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalGroupComponent } from './terminal-group.component';

describe('TerminalGroupComponent', () => {
  let component: TerminalGroupComponent;
  let fixture: ComponentFixture<TerminalGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
