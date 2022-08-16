import { Genre } from "./genre";
export interface Movie {
    id: number;
    title: string;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    imdbUrl: string;
    posterUrl: string;
    originalLanguage: string;
    releaseDate: string;
    runtime: number;
    price: number;
    genreId: number;
    genres: Genre[];
    castId: number;
    purchaseId: number;
    favoriteId: number;
}
