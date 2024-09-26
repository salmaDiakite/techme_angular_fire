import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaieTabsComponent } from './essaie-tabs.component';

describe('EssaieTabsComponent', () => {
  let component: EssaieTabsComponent;
  let fixture: ComponentFixture<EssaieTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EssaieTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssaieTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
