import { BooksService } from './../../core/services/books.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../../core/models/book-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteBookModalComponent } from '../delete-book-modal/delete-book-modal.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {
  bookID: string | null;
  bookObj : book | undefined;


  constructor(private activatedRoute: ActivatedRoute, private booksService: BooksService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.bookID = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.bookID) {
      this.getBookDetails(this.bookID)
    }
  }

  getBookDetails(id) {
    this.bookObj = this.booksService.getBookDetails(id);

  }


  editBook() {
    this.router.navigate(['./books/edit/' + this.bookObj?.id]);
  }
  deleteBook() {
    const modalRef = this.modalService.open(DeleteBookModalComponent, { centered: true });
    modalRef.componentInstance.bookID = this.bookObj?.id;
    modalRef.componentInstance.bookDeleted.subscribe(($e: any) => {
      if ($e) {
        this.router.navigate(['./books']);
      }
    })
  }
}
