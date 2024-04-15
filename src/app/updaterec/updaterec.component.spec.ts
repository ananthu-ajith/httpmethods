import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecComponent } from './updaterec.component';

describe('UpdaterecComponent', () => {
  let component: UpdaterecComponent;
  let fixture: ComponentFixture<UpdaterecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdaterecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdaterecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
