import { Component, OnInit } from '@angular/core';
import { RickandMortyService } from '../../services/rickand-morty.service';
import { Character } from '../../interfaces/rick-and-morty';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-rickand-morty-home',
  standalone: true,
  imports:[CardComponent, CommonModule,NavegationComponent,HttpClientModule],
  templateUrl: './rickand-morty-home.component.html',
  styleUrls: ['./rickand-morty-home.component.css'],
})
export class RickAndMortyHomeComponent implements OnInit {
  characters: Character[] = [];
  prev: string | null = null;
  next: string | null = null;
  currentPage: number = 1;
  searchName: string = '';

  constructor(private apiService: RickandMortyService) {}

  ngOnInit() {
      this.loadCharacters();

  }

  loadCharacters() {
    this.apiService.getCharacters(this.currentPage, this.searchName).subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data); // Añade esta línea para debug
        this.characters = data.results;
        this.prev = data.info.prev;
        this.next = data.info.next;
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
      },
    });
  }


  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchName = input.value.trim();
    this.currentPage = 1;
    this.loadCharacters();
  }

  onPageChange(direction: number) {
    this.currentPage += direction;
    this.loadCharacters();
  }
}
