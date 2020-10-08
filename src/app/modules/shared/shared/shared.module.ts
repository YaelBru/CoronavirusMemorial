import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatCardModule, 
  MatExpansionModule, 
  MatIconModule, 
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatMenuModule,
  MatDividerModule,
  MatTooltipModule,
  MAT_DATE_LOCALE
 } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MatSpinnerOverlayComponent } from '../mat-spinner-overlay/mat-spinner-overlay/mat-spinner-overlay.component';
import {GoogleAnalyticsGTagComponent} from "../app-google-analytics-gtag/app-google-analytics-gtag.component";



@NgModule({
  declarations: [
    MatSpinnerOverlayComponent,
    GoogleAnalyticsGTagComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatCardModule, 
    MatExpansionModule, 
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule, 
   
    
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatCardModule, 
    MatExpansionModule, 
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSpinnerOverlayComponent,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    GoogleAnalyticsGTagComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]

})
export class SharedModule { }
