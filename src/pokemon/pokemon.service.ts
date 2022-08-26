import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PokemonService {
  endpointPokeapi = this.configService.get<string>('MS.endpoint_pokeapi');
  urlPokeapi = this.configService.get<string>('MS.url_pokeapi');

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  byPost(id: string) {
    return this.httpGetRequest(this.urlPokeapi, this.endpointPokeapi, id);
  }

  byGet(id: string) {
    return this.httpGetRequest(this.urlPokeapi, this.endpointPokeapi, id);
  }

  async httpGetRequest(url, endpoint, id) {
    let source$;
    //http://localhost:3000/pokeapi/1
    const request: string = url + endpoint + id;
    try {
      source$ = await this.httpService.get(request, {
        timeout: 5000,
      });
      const response: any = await lastValueFrom(source$);
      console.log('response', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
