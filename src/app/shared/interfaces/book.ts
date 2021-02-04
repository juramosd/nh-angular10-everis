import { languageCode } from '../type'

export interface Book {
    id: number;
    name: string;
    isbn: string;
    image: string;
    language: languageCode;
    publishedDate:string | Date;
    publisher: string;
    numberPages: number;
    summary: string;
    featured: boolean;
}
