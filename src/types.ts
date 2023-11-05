export interface StarWarsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[];
}

export interface StarWarsCharacter {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export type RootStackParamList = {
  Home: undefined;
  Detail: { url: string };
};
