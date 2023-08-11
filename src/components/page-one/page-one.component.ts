import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {Company, Industry, Language} from "../../constants/types";

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

  onCompanyChange(event: any) {
    this.company = {...this.company, companyName: event.target.value}
    this.onCompanyChanged.emit(this.company)
  }

  onIndustryChange(event: any) {
    this.company.industry = event.target.value;
    this.onCompanyChanged.emit(this.company)
  }
}
