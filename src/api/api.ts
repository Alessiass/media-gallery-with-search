import data from './data.json';

export interface MediaList {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  url?: string;
  posterUrl?: string;
}

const mediaList = data as MediaList[];
const errorPossibility = 0; //Initial 0.2
const maxRequestTimeout = 1; //Initial 4

export function fetchMediaList(
  limit: number,
  page: number
): Promise<MediaList[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error('Network error'));
    }
    if (page > Math.floor(mediaList.length / limit)) {
      reject(new Error('Fetched all films'));
    }

    setTimeout(() => {
      resolve(mediaList.slice(limit * (page - 1), limit * page));
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}

export function searchMedia(query: string): Promise<MediaList[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error('Network error'));
    }

    setTimeout(() => {
      resolve(
        mediaList.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}
