import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecComponent } from './newrec.component';

describe('NewrecComponent', () => {
  let component: NewrecComponent;
  let fixture: ComponentFixture<NewrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewrecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
