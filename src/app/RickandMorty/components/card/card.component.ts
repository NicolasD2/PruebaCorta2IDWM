import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/rick-and-morty';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports:[CommonModule],
  standalone: true,
})
export class CardComponent {
  @Input() character!: Character;
}
