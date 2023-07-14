import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeAccountComponent } from './notice-account.component';

describe('NoticeAccountComponent', () => {
  let component: NoticeAccountComponent;
  let fixture: ComponentFixture<NoticeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeAccountComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoticeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
