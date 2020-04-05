import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    PdfViewerModule
  ],
  exports: [
    NgbModule,
    PdfViewerModule
  ]
})
export class SharedModule { }
