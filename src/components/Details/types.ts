export interface IDetails {
  overview: string;
  title: string;
  posterPath: string;
  genreId: number;
  runtime: number;
  vote_average: number;
  vote_count: number;
  release_date: Date;
}

export interface Genre {
  id: number;
  name: string;
}
