import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from '../assets/vfs_fonts.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// @ts-ignore
import fonts from './config/pdfFonts.js';
// @ts-ignore
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// @ts-ignore
pdfMake.fonts = fonts;

import {report} from './report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  generatePdf() {
    (pdfMake as any).createPdf({
      pageMargins: [40, 40, 40, 100],
      footer: {
        table: {
          widths: [60,'*'],
          body: [
            [
              {
                colSpan: 2,
                text: '',
                border: [false, false, false, true]
              },
              '',
            ],
            [
              {
                image: 'data:image/png;base64,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',
                width: 60,
                border: [false, false, false, false],
                margin: [0, 5, 0, 0]
              },
              {
                text: report.footer,
                italics: true, font: 'FanwoodText',
                border: [false, false, false, false],
                margin: [0, 10, 0, 0],
                fontSize: 10
              },
            ]
          ]

        }
      },
      content: [
        {
          toc: {
            title: {text: 'Table of Contents\n\n', fontSize: 28, italics: true, font: 'CrimsonText' },
            textStyle: { font: 'CrimsonText' },
            pageBreak: 'before',
          },

        },
        {
          text: report.sections[0].title,
          italics: true, font: 'CrimsonText', fontSize: 24,
          tocItem: true,
          tocStyle: { bold: true, font: 'CrimsonText' },
          pageBreak: 'before',
        },
        {
          text: report.sections[0].elements[0].title,
          italics: true, font: 'CrimsonText', fontSize: 20,
          tocItem: true,
          tocStyle: { italics: true, font: 'CrimsonText' },
          tocMargin: [20, 0, 0, 0],
          // pageBreak: 'before',
        },
        {
          text: '\n' + report.sections[0].elements[0].content,
        },
        {
          text: report.sections[0].elements[1].title,
          italics: true, font: 'CrimsonText', fontSize: 20,
          tocItem: true,
          tocStyle: { italics: true, font: 'CrimsonText' },
          tocMargin: [20, 0, 0, 0],
          pageBreak: 'before',
        },
        {
          text: '\n' + report.sections[0].elements[1].content,
        },
        {
          text: report.sections[0].elements[2].title,
          italics: true, font: 'CrimsonText', fontSize: 20,
          tocItem: true,
          tocStyle: { italics: true, font: 'CrimsonText' },
          // tocNumberStyle: { italics: true },
          tocMargin: [20, 0, 0, 0],
          pageBreak: 'before',
        },
        {
          text: '\n' + report.sections[0].elements[2].content,
        },
        {
          text: report.sections[1].title,
          italics: true, font: 'CrimsonText', fontSize: 24,
          tocStyle: { bold: true, font: 'CrimsonText' },
          tocItem: true,
          pageBreak: 'before'
        },
        {
          text: report.sections[1].elements[0].title,
          italics: true, font: 'CrimsonText', fontSize: 20,
          tocItem: true,
          tocStyle: { italics: true, font: 'CrimsonText' },
          tocMargin: [20, 0, 0, 0],
          // pageBreak: 'before',
        },
        {
          text: '\n' + report.sections[1].elements[0].content,
        },
        {
          text: report.sections[1].elements[1].title,
          italics: true, font: 'CrimsonText', fontSize: 20,
          tocItem: true,
          tocStyle: { italics: true, font: 'CrimsonText' },
          tocMargin: [20, 0, 0, 0],
          pageBreak: 'before',
        },
        {
          text: '\n' + report.sections[1].elements[1].content,
        },
      ],
      // styles: {
      //   font: 'Roboto'
      // },
      // defaultStyle: {
      //   font: 'FanwoodText'
      // },
    }).open();
  }
}
