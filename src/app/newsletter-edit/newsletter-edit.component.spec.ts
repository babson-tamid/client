import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterEditComponent } from './newsletter-edit.component';

describe('NewsletterEditComponent', () => {
  let component: NewsletterEditComponent;
  let fixture: ComponentFixture<NewsletterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
