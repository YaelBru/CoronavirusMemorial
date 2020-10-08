import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OverviewService } from "../../overview.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-memorial-page",
  templateUrl: "./memorial-page.component.html",
  styleUrls: ["./memorial-page.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MemorialPageComponent implements OnInit {
  @Input() person;
  @Input() tributes = [];
  @Output() reset = new EventEmitter<any>();
  @Output() refreshMemorialPage = new EventEmitter<any>();

  @ViewChild("tributeForm", { static: false }) private tributeForm;

  countries;
  submit: boolean = false;
  sending: boolean = false;
  error: boolean = false;
  message: string;

  defaultMsg: string = "Rest In Peace";

  addTributeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private overviewService: OverviewService,
    private dialog: MatDialog
  ) {}

  // user activatedRoute snapshot?
  ngOnInit() {
    this.createForm();
    this.countries = this.overviewService.getFlags();
  }

  createForm() {
    this.addTributeForm = this.fb.group({
      personId: [this.person._id, [Validators.required]],
      initiator: ["", [Validators.required]],
      country: ["", [Validators.required]],
      flag: ["", [Validators.required]],
      text: [""],
    });
  }

  chooseCountry(event) {
    this.addTributeForm.get("country").setValue(event);
    let countryFlag = this.countries.find((flag) => flag.name === event);
    this.addTributeForm.get("flag").setValue(countryFlag.code || "");
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.tributeForm, {
      width: "555px",
      height: "360px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.refreshMemorialPage.emit();
    });
  }

  addTribute() {
    this.submit = true;
    this.sending = true;
    this.overviewService.addTribute(this.addTributeForm.value).subscribe(
      (res) => {
        this.submit = false;
        this.sending = false;
        this.error = false;
        this.dialog.closeAll();
      },
      (err) => {
        this.sending = false;
        this.error = true;
        this.message =
          "We’ve encountered an error. Reload the page and try again. If the error persists, please contact us.";
      }
    );
  }

  backToAddTributeForm() {
    this.submit = false;
    this.sending = false;
    this.error = false;
  }

  backToMemorialList() {
    this.person = null;
    this.reset.emit(this.person);
  }
}
