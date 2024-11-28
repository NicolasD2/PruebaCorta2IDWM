
export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
