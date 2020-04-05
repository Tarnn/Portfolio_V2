import { RESUME_LINK } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.module';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfSource: string = RESUME_LINK;

  constructor() { }

  ngOnInit(): void {
  }

  pdfView(pdf: PDFDocumentProxy) {
    pdf.getData().then((value: Uint8Array) => {
      console.log("PDF Bytes: ", value);
    });
 }

}
