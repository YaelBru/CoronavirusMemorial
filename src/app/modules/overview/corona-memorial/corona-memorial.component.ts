import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { OverviewService } from "../overview.service";
import { MemorialData } from "../../interfaces/memorial-data";
import { Tribute } from "../../interfaces/tribute";

@Component({
  selector: "app-corona-memorial",
  templateUrl: "./corona-memorial.component.html",
  styleUrls: ["./corona-memorial.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CoronaMemorialComponent implements OnInit {
  memorialPeople: MemorialData[] = [];
  person: MemorialData;
  memorialTributes: Tribute[] = [];
  isLoading: boolean = true;
  errorMessage: string;

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {
    this.getMemorialList();
  }

  getMemorialList() {
    this.overviewService.getMemorialList().subscribe(
      (res: []) => {
        this.isLoading = false;
        this.memorialPeople = res;
      },
      (err) => {
        this.isLoading = false;
        this.errorMessage =
          "We’ve encountered an error. Reload the page and try again. If the error persists, please contact us.";
      }
    );
  }

  getPersonMemorial(person: MemorialData) {
    this.person = person;
    this.getTributesList();
  }

  getTributesList() {
    this.overviewService.getTributes(this.person).subscribe((res: []) => {
      this.memorialTributes = res;
    });
  }

  backToMemorialList(event) {
    this.person = event;
  }
}
