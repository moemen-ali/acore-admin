export class book {
    title: string;
    id: string;
    author: string;
    categoryID: string;
    categoryName: string;
    price: number;
    pdf?: ArrayBuffer;
    coverPhoto: string;
    version: string;
    olderVersions: string[];
    edition?: string;
    isbn: string;
    releaseDate?: string;
    pagesNumber?: string;
    readingTime?: string;
    brief: string;

}