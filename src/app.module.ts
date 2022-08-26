import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import { configVar } from './shared/config-var';

@Module({
  imports: [
    PokemonModule,
    ConfigModule.forRoot({
      envFilePath: `environment/${process.env.NODE_ENV}.env`,
      load: [configVar],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
