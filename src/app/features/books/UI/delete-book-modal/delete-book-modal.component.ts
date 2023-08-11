import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from '../../core/services/books.service';


@Component({
  selector: 'app-delete-book-modal',
  templateUrl: './delete-book-modal.component.html',
})
export class DeleteBookModalComponent {
  @Input() bookID: string;
  @Output() bookDeleted = new EventEmitter();
  submitted: boolean = false;
  constructor(public modal: NgbActiveModal, private booksService: BooksService) {}


  confirm() {
    // implement delete request
    this.submitted = true;
    setTimeout(() => {
      
      this.booksService.deleteBook(this.bookID);
      this.bookDeleted.emit(true);
      this.submitted = false;
      this.modal.close();
    }, 2000);
  }
}
