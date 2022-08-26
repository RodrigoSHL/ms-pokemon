import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  pokemonByPost(@Body() pokemon: Pokemon) {
    return this.pokemonService.byPost(pokemon.id);
  }

  @Get(':id')
  pokemonByGet(@Param('id') id: string) {
    return this.pokemonService.byGet(id);
  }
}
