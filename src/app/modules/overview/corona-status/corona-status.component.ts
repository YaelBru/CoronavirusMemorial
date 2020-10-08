import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OverviewService} from '../overview.service';
import status from '.././../../../assets/data/status.json';
import { CountryStatus } from '../../interfaces/country-status'



@Component({
  selector: 'app-corona-status',
  templateUrl: './corona-status.component.html',
  styleUrls: ['./corona-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoronaStatusComponent implements OnInit {

  countries: CountryStatus[] = status;
  filteredCountries: CountryStatus[] = status;
  totalCases: number;
  totalDeaths: number;
  criticalIll: number;
 
  sum = (numbersArr: any[]) => numbersArr.reduce((a, b) => a + b, 0);

  constructor(private overviewService: OverviewService) {
  }

  ngOnInit() {
    this.totalCases = this.calcTotalCases();
    this.totalDeaths = this.calcTotalDeaths();
    this.criticalIll = this.calcCriticalIll()
    this.sort();
  }

  calcCriticalIll() {
    const totalCriticalIllArr = [];
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].seriousCritical) {
        const parsedNumberCases = parseInt(this.countries[i].seriousCritical.replace(',', '').trim());
        totalCriticalIllArr.push(parsedNumberCases);
      }
    }
    return this.sum(totalCriticalIllArr);
  }

  calcTotalCases() {
    const totalCasesNumberArr = [];
    for (let i = 0; i < this.countries.length; i++) {
      const parsedNumberCases = parseInt(this.countries[i].totalCases.replace(',', '').trim());
      totalCasesNumberArr.push(parsedNumberCases);
    }
    return this.sum(totalCasesNumberArr);
  }

  calcTotalDeaths() {
    let totalDeathNumberArr = [];
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].totalDeath.trim() !== '') {
        let parsedNumber = parseInt(this.countries[i].totalDeath.replace(',', '').trim());
        totalDeathNumberArr.push(parsedNumber);
      }
    }
    return this.sum(totalDeathNumberArr);
  }

  sort() {
    let aa = this.countries.sort((a, b) => {
      const aa = parseInt(a.totalCases.replace(/[^0-9]/g, ''));
      const bb = parseInt(b.totalCases.replace(/[^0-9]/g, ''));

      return bb - aa;
    });
  }

  search(e) {
    const searchStr = e.value;
    this.filteredCountries = this.countries.filter((country) => country.country.toLowerCase().includes(searchStr.toLowerCase()));
    this.sort();
  }
}

