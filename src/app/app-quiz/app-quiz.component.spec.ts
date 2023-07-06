import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppQuizComponent } from './app-quiz.component';

describe('AppQuizComponent', () => {
  let component: AppQuizComponent;
  let fixture: ComponentFixture<AppQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppQuizComponent]
    });
    fixture = TestBed.createComponent(AppQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
