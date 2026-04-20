import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsList } from './functions-list';

describe('FunctionsList', () => {
  let component: FunctionsList;
  let fixture: ComponentFixture<FunctionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
