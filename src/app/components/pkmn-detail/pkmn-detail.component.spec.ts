import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailComponent } from './pkmn-detail.component';

describe('PkmnDetailComponent', () => {
  let component: PkmnDetailComponent;
  let fixture: ComponentFixture<PkmnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
