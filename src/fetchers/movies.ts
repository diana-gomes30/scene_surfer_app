import { urls } from '@fetchers/urls';

const getTrendingMovies = async (
  timeWindow: string = 'day',
  language: string = 'en-US'
) => {
  const url = urls.trendingMovies(timeWindow, language);
  const apiToken = process.env.API_TOKEN;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    const data = await response.json();
    //console.log(data);
    return data;
  } else {
    //console.log(response);
    return [];
  }
};

const getMovies = async (
  includeAdult: boolean = false,
  includeVideo: boolean = false,
  language: string = 'en-US',
  page: number = 1,
  sortBy: string = 'popularity.desc'
) => {
  const url = urls.movies(includeAdult, includeVideo, language, page, sortBy);
  const apiToken = process.env.API_TOKEN;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    const data = await response.json();
    //console.log(data);
    return data;
  } else {
    //console.log(response);
    return [];
  }
};

export { getTrendingMovies, getMovies };
