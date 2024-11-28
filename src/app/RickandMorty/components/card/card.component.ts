import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/rick-and-morty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
})
export class CardComponent {
  @Input() character!: Character;
}
