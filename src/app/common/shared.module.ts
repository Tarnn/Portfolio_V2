import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    PdfViewerModule,
    InViewportModule
  ],
  exports: [
    NgbModule,
    PdfViewerModule,
    InViewportModule
  ]
})
export class SharedModule { }
