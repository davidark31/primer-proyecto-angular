import { Component } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../shared/interface/pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pokemon',
    imports: [HttpClientModule,CommonModule],
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
    providers:[PokemonService],
})
export class PokemonComponent {
    pokemons: Pokemon[] = [];
    constructor(private pS: PokemonService){}

    ngOnInit(){
    this.pS.getPokemones().subscribe({
        next:(data) => {
        this.pokemons = data.results;
        // this.pokemons = data.results.map((p: any) => p.name);
        // console.log(this.pokemons);
            },
        error:(err)=>console.log('error al obtener pokemon',err)
    });
    }
}