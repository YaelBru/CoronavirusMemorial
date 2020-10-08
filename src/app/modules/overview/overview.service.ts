import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import countryFlags from "../../../assets/data/countryFlags.json";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { MemorialData } from "../interfaces/memorial-data";
import { Tribute } from "../interfaces/tribute";

@Injectable({
  providedIn: "root",
})
export class OverviewService {
  flags = countryFlags;

  urlMemorial = `${environment.url}/api/v1/memorial`;
  urlTributes = `${environment.url}/api/v1/candles`;

  constructor(private http: HttpClient) {}

  getMemorialList(): Observable<any> {
    return this.http.get(this.urlMemorial).pipe(
      map((memorialList: MemorialData[]) => {
        memorialList.forEach((person) => {
          person.flag = person.flag.toLowerCase();
        });
        return memorialList;
      })
    );
  }

  getTributes(person): Observable<any> {
    return this.http.get(`${this.urlTributes}`, { params: { personId: person._id } }).pipe(
      map((res: any) => {
        let tributes = res.tributes;
        tributes.forEach((tribute) => {
          tribute.flag = tribute.flag.toLowerCase();
        });
        return tributes;
      })
    );
  }

  getFlags() {
    return this.flags;
  }

  addPerson(data): Observable<any> {
    return this.http.post(this.urlMemorial, data);
  }

  addTribute(tribute): Observable<any> {
    return this.http.post(this.urlTributes, tribute);
  }
}
