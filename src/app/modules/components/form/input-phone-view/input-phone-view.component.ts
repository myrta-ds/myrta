import { Component, OnInit } from '@angular/core';
import {
  CountryISO
} from '../../../../../../projects/myrta-ui/src/lib/components/form/input-phone/enums/country-iso.enum';

@Component({
  selector: 'mrx-input-phone-view',
  templateUrl: './input-phone-view.component.html',
  styleUrls: ['./input-phone-view.component.less']
})
export class InputPhoneViewComponent implements OnInit {

  public countryISO = CountryISO
  public countries: CountryISO[] = [
    this.countryISO.Argentina,
    this.countryISO.Armenia,
    this.countryISO.Belarus,
    this.countryISO.Brazil,
    this.countryISO.Brunei,
    this.countryISO.Cambodia,
    this.countryISO.Colombia,
    this.countryISO.Cuba,
    this.countryISO.Ecuador,
    this.countryISO.Egypt,
    this.countryISO.Georgia,
    this.countryISO.India,
    this.countryISO.Indonesia,
    this.countryISO.Iran,
    this.countryISO.Kazakhstan,
    this.countryISO.Kenya,
    this.countryISO.Kyrgyzstan,
    this.countryISO.Laos,
    this.countryISO.Madagascar,
    this.countryISO.Malaysia,
    this.countryISO.Mexico,
    this.countryISO.Myanmar,
    this.countryISO.Nicaragua,
    this.countryISO.Peru,
    this.countryISO.Philippines,
    this.countryISO.Russia,
    this.countryISO.Serbia,
    this.countryISO.SouthSudan,
    this.countryISO.Tajikistan,
    this.countryISO.Tanzania,
    this.countryISO.Thailand,
    this.countryISO.Turkmenistan,
    this.countryISO.Uzbekistan,
    this.countryISO.Vietnam,
  ]
  public testValue = ''
  public value = '+79183344555'
  public value2 = ''
  public allowedCountries: string[] = ['ru'];

  constructor() { }

  ngOnInit(): void {
  }

  public changeValue(e: any) {
    this.value = e
    console.log(this.value)
  }

  changeNumber(event: any) {
    console.log(event)
    if (event) {
      this.value = event.unFormatNumber
    }
  }

  public numberTestChangeValue(e: any) {
    console.log(123)
    console.log(e)
  }

  public numberChangeValue(e: any) {
    console.log(e)
  }
}
