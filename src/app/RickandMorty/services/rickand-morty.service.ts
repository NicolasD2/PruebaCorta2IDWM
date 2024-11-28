import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/rick-and-morty';

@Injectable({
  providedIn: 'root',
})
export class RickandMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1, name: string = ''): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/character?page=${page}&name=${name}`);
  }
}
