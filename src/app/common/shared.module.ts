import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InViewportModule } from 'ng-in-viewport';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    PdfViewerModule,
    InViewportModule,
    NgxTypedJsModule
  ],
  exports: [
    NgbModule,
    PdfViewerModule,
    InViewportModule,
    NgxTypedJsModule
  ]
})
export class SharedModule { }
