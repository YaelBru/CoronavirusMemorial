import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-mat-spinner-overlay',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss']
})
export class MatSpinnerOverlayComponent implements OnInit {

  // color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  strokeWidth: number = 7;
  diameter: number = 50;


  constructor() { }

  ngOnInit() {
  }

}
