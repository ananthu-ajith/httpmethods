import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrecComponent } from './findrec.component';

describe('FindrecComponent', () => {
  let component: FindrecComponent;
  let fixture: ComponentFixture<FindrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindrecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
