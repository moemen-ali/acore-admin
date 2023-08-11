import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { book } from '../../core/models/book-model';
import { BooksService } from '../../core/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})

export class AddBookComponent {
  selectedImage: string | ArrayBuffer | null = null;
  book;
  bookID: string | null;
  selectedCar: number;
  uploadedImg;
  imagePreview;
  date: { year: number; month: number };
  selectedDate;
  categories = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Si-Fi' },
    { id: '3', name: 'Drama' },
    { id: '4', name: 'Horror' },
  ];

  olderVersions = [
    { id: '1', name: '1997' },
    { id: '2', name: '2004' },
    { id: '3', name: '2010' }
  ];

  constructor(private router: Router, private translate: TranslateService, private activatedRoute: ActivatedRoute, private booksService: BooksService) { }


  ngOnInit() {
    this.bookID = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.bookID) {
      this.getBookDetails(this.bookID)
    } else {
      this.book = new book();
    }
  }

  getBookDetails(id) {
    this.book = this.booksService.getBookDetails(id);
    this.selectedImage = this.book.coverPhoto;
    let date = this.book.releaseDate.split('-');
    this.imagePreview = this.book.coverPhoto;
    this.selectedDate = {
      "year": date[0],
      "month": date[1],
      "day": date[2]
    }
  }

  submit(bookForm: NgForm) {
    if (bookForm.valid) {
      // submit bookObj to API
      this.backToList()

    }
  }

  backToList() {
    this.router.navigate(['./books']);
  }


  inputValue: string = '';

  validateInput() {
    // Replace any non-numeric characters (except '-') with an empty string
    this.inputValue = this.inputValue.replace(/[^0-9-]/g, '');
  }



  onFileSelected(event: any) {
    console.log(event.target.files[0])
    const file = event.target.files[0];

    if (file) {
      this.previewImage(file);
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };

    reader.readAsDataURL(file);
  }

}
