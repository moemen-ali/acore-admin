import { Injectable } from '@angular/core';
import { book } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }


  booksList: Array<book> = [
    {
      title: 'Book 1',
      id: '1',
      author: 'Author 1',
      categoryID: '1',
      categoryName: 'Category 1',
      price: 25.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 1'],
      edition: 'First Edition',
      isbn: '978-3-16-148410-0',
      releaseDate: '2023-08-10',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "A captivating novel about..."
    },
    {
      title: 'Book 2',
      id: '2',
      author: 'Author 2',
      categoryID: '2',
      categoryName: 'Category 2',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 2'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 3',
      id: '3',
      author: 'Author 3',
      categoryID: '3',
      categoryName: 'Category 3',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 3'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 4',
      id: '4',
      author: 'Author 4',
      categoryID: '4',
      categoryName: 'Category 4',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 4'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 5',
      id: '5',
      author: 'Author 5',
      categoryID: '5',
      categoryName: 'Category 5',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 5'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 6',
      id: '6',
      author: 'Author 6',
      categoryID: '6',
      categoryName: 'Category 6',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 6'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 7',
      id: '7',
      author: 'Author 7',
      categoryID: '7',
      categoryName: 'Category 7',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 7'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 8',
      id: '8',
      author: 'Author 8',
      categoryID: '8',
      categoryName: 'Category 8',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 8'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 9',
      id: '9',
      author: 'Author 9',
      categoryID: '9',
      categoryName: 'Category 9',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 9'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 10',
      id: '10',
      author: 'Author 10',
      categoryID: '10',
      categoryName: 'Category 10',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 10'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 11',
      id: '11',
      author: 'Author 11',
      categoryID: '11',
      categoryName: 'Category 11',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 11'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 12',
      id: '12',
      author: 'Author 12',
      categoryID: '12',
      categoryName: 'Category 12',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 12'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 13',
      id: '13',
      author: 'Author 13',
      categoryID: '13',
      categoryName: 'Category 13',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 13'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 14',
      id: '14',
      author: 'Author 14',
      categoryID: '14',
      categoryName: 'Category 14',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 14'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 15',
      id: '15',
      author: 'Author 15',
      categoryID: '15',
      categoryName: 'Category 15',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 15'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 16',
      id: '16',
      author: 'Author 16',
      categoryID: '16',
      categoryName: 'Category 16',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 16'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 17',
      id: '17',
      author: 'Author 17',
      categoryID: '17',
      categoryName: 'Category 17',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 17'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 18',
      id: '18',
      author: 'Author 18',
      categoryID: '18',
      categoryName: 'Category 18',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 18'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 19',
      id: '19',
      author: 'Author 19',
      categoryID: '19',
      categoryName: 'Category 19',
      price: 19.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 19'],
      edition: 'Second Edition',
      isbn: '978-3-16-148410-1',
      releaseDate: '2023-07-15',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "An intriguing story that..."
    },
    {
      title: 'Book 20',
      id: '20',
      author: 'Haruki',
      categoryID: '20',
      categoryName: 'Category 20',
      price: 29.99,
      coverPhoto: 'assets/images/features/cover.jpg',
      version: '1',
      olderVersions: ['Older Version 20'],
      edition: 'Third Edition',
      isbn: '978-3-16-148412-0',
      releaseDate: '2023-06-20',
      pagesNumber: '478',
      readingTime: '20h',
      brief: "A thought-provoking novel that..."
    }
  ];
  getBooksList() {


    return this.booksList;
  }

  searchBooks(query: string) {
    query = query.toLowerCase();
    return this.booksList.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.brief.toLowerCase().includes(query)
    );
  }

  deleteBook(bookID: string) {
    const index = this.booksList.findIndex(item => item.id === bookID);
    if (index !== -1) {
      this.booksList.splice(index, 1);
    }
  }

  getBookDetails(bookID: string) {
    const book = this.booksList.find(item => item.id === bookID);
    return book;
  }
}
