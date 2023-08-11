import { BooksService } from './../../core/services/books.service';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { book } from '../../core/models/book-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { DeleteBookModalComponent } from '../delete-book-modal/delete-book-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent {
  displayedColumns: string[] = [
    'title',
    'categoryName',
    'author',
    'isbn',
    'version',
    'actions'
  ];
  searchText: string;
  booksData: Array<book> = [];

  dataSource = new MatTableDataSource(this.booksData);
  dataSourceWithPageSize = new MatTableDataSource(this.booksData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService, private cdref: ChangeDetectorRef, private router: Router, private modalService: NgbModal) {
  }




  ngOnInit() {
    this.getBooksList();
  }
  ngAfterViewInit() {
    this.setPaginator();
  }
  
  setPaginator() {
    this.paginator.pageSize = 6;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cdref.detectChanges();

  }


  getBooksList() {
    this.booksData = this.booksService.getBooksList();
    this.dataSource = new MatTableDataSource(this.booksData);
  }
  getPaginatorRange() {
    if (this.paginator) {
      const pageCount = Math.ceil(this.dataSource.data.length / this.paginator.pageSize);
      return Array.from({ length: pageCount }, (_, index) => index + 1);
    } else {
      return [0];
    }
  }

  goToPage(page: number): void {
    this.paginator.pageIndex = page - 1;
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  searchBooks(searchText: any) {
    if (searchText.length > 2) {
      this.booksData = this.booksService.searchBooks(searchText);
      this.dataSource = new MatTableDataSource(this.booksData);
    }
  }

  newBook() {
    this.router.navigate(['./books/add']);
  }
  editBook(id: string) {
    this.router.navigate(['./books/edit/' + id]);
  }
  viewBook(id: string) {
    this.router.navigate(['./books/book-details/' + id]);
  }
  deleteBook(id: string) {
    const modalRef = this.modalService.open(DeleteBookModalComponent, { centered: true });
    modalRef.componentInstance.bookID = id;
    modalRef.componentInstance.bookDeleted.subscribe(($e: any) => {
      if ($e) {
        this.getBooksList();
        this.setPaginator();
      }
    })
  }
}
