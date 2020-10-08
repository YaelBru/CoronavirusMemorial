import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemorialAddComponent } from '../corona-memorial/memorial-add/memorial-add.component';
import { MemorialData } from '../../interfaces/memorial-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  @Output() refreshPage = new EventEmitter<any>();


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MemorialAddComponent, {
      width: '1300px',
      height: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshPage.emit();
    });
  }

}
