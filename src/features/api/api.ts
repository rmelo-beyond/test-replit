import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: [],
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon, string>({
      query: (name) => `https://pokeapi.co/api/v2/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = api;
