import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RickAndMortyHomeComponent } from './RickandMorty/pages/rickand-morty-home/rickand-morty-home.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, RickAndMortyHomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pruebacorta2';

  ngOnInit(): void {
    initFlowbite();
  }
}
