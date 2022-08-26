export const configVar = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT) || 3001,
  MS: {
    url_pokeapi: process.env.URL_POKEAPI,
    endpoint_pokeapi: process.env.ENDPOINT_POKEAPI,
  },
});
