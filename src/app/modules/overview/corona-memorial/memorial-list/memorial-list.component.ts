import {
  Component,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from "@angular/core";
import { MemorialData } from "../../../interfaces/memorial-data";
import { MatDialog } from "@angular/material/dialog";
import { MemorialAddComponent } from "../memorial-add/memorial-add.component";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "app-memorial-list",
  templateUrl: "./memorial-list.component.html",
  styleUrls: ["./memorial-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MemorialListComponent implements OnInit {
  public environment = environment;

  @Input() memorialPeopleList: MemorialData[] = [];
  @Input() errorMessage;
  @Input() isLoading;

  @Output() showPersonMemorial = new EventEmitter<MemorialData>();
  @Output() refreshPage = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  showPerson(person: MemorialData) {
    this.showPersonMemorial.emit(person);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MemorialAddComponent, {
      width: "1300px",
      height: "1000px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.refreshPage.emit();
    });
  }
}
