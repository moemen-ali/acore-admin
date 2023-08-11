import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './UI/books-list/books-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { AddBookComponent } from './UI/add-book/add-book.component';
import { BookDetailsComponent } from './UI/book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { DeleteBookModalComponent } from './UI/delete-book-modal/delete-book-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BooksListComponent,
      },
      {
        path: 'add',
        component: AddBookComponent,
      },
      {
        path: 'edit/:id',
        component: AddBookComponent,
      },
      {
        path: 'book-details/:id',
        component: BookDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    BooksListComponent,
    AddBookComponent,
    BookDetailsComponent,
    DeleteBookModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    TranslateModule.forChild(),
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgbDatepickerModule,
    NgSelectModule
  ]
})
export class BooksModule { }
