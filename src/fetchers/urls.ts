import { baseUrl } from '@consts/urls';

export const urls = {
  movies: (
    includeAdult: boolean = false,
    includeVideo: boolean = false,
    language: string = 'en-US',
    page: number = 1,
    sortBy: string = 'popularity.desc'
  ) =>
    `${baseUrl}discover/movie?include_adult=${includeAdult}&include_video=${includeVideo}&language=${language}&page=${page}&sort_by=${sortBy}`,
  trendingMovies: (timeWindow: string = 'day', language: string = 'en-US') =>
    `${baseUrl}trending/movie/${timeWindow}?language=${language}`,
};
