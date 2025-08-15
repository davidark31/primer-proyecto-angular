// src/app/services/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

    constructor(private http: HttpClient) {}

    getPokemones(): Observable<any> {
        return this.http.get<any>(this.API_URL);
    }

    getPokemonDetail(url: string): Observable<any> {
        return this.http.get<any>(url);
    }
}