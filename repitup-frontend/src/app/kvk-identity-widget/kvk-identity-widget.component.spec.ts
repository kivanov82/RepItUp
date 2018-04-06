import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkIdentityWidgetComponent } from './kvk-identity-widget.component';

describe('KvkIdentityWidgetComponent', () => {
  let component: KvkIdentityWidgetComponent;
  let fixture: ComponentFixture<KvkIdentityWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvkIdentityWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvkIdentityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
