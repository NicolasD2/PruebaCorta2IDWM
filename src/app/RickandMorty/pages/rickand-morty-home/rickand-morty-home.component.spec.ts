import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandMortyHomeComponent } from './rickand-morty-home.component';

describe('RickandMortyHomeComponent', () => {
  let component: RickandMortyHomeComponent;
  let fixture: ComponentFixture<RickandMortyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandMortyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickandMortyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
