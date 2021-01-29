export interface IBook {
  id: number;
  name: string;
  isbn: string;
  image: string;
  language: 'es' | 'en';
  publishedDate: string;
  publisher: string;
}

export interface IBookSelected{
    name: string;
    cantidad: number;
}
