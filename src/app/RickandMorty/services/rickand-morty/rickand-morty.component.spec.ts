import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandMortyComponent } from './rickand-morty.component';

describe('RickandMortyComponent', () => {
  let component: RickandMortyComponent;
  let fixture: ComponentFixture<RickandMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandMortyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickandMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
