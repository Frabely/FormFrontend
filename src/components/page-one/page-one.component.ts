import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Company, CompanyValidation, Industry, Language} from "../../constants/types";
import {getCompanyValidation} from "../../functions/validationFunctions";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  protected readonly de: Language = de;

  @Output() onCompanyChanged = new EventEmitter<Company>();
  @Output() onCompanyValidationChanged = new EventEmitter<CompanyValidation>()
  @Input() company!: Company
  @Input() industryList!: Industry[]
  @Input() companyValidation!: CompanyValidation

  isNameValid?: boolean

  onCompanyChange(event: any) {
    this.company = {...this.company, companyName: event.target.value}
    this.onCompanyChanged.emit(this.company)
    this.companyValidation.name = getCompanyValidation(this.company).name
    this.onCompanyValidationChanged.emit(this.companyValidation)
  }

  onIndustryChange(event: any) {
    const filterResult = this.industryList.filter((industry: Industry) => industry.name === event.target.value)
    if (filterResult.length > 0)
      this.company.industry = filterResult[0];
    this.onCompanyChanged.emit(this.company)
  }
}
