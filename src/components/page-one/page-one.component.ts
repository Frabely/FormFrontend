import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Company, Industry, Language} from "../../constants/types";
import {getCompanyValidation} from "../../constants/validationFunctions";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  protected readonly de: Language = de;

  @Output() onCompanyChanged = new EventEmitter<Company>();
  @Input() company!: Company
  @Input() industryList!: Industry[]

  isNameValid?: boolean

  onCompanyChange(event: any) {
    this.company = {...this.company, companyName: event.target.value}
    this.onCompanyChanged.emit(this.company)
    this.isNameValid = getCompanyValidation(this.company).name
  }

  onIndustryChange(event: any) {
    this.company.industry = event.target.value;
    this.onCompanyChanged.emit(this.company)
  }
}
