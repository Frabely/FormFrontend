import {Component, EventEmitter, Input, Output} from '@angular/core';
import de from "../../constants/de.json";
import {CheckBoxValidation, Company, Language, User} from "../../constants/types";

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {

  protected readonly de: Language = de;

  @Input() user!: User
  @Input() company!: Company
  @Input() checkBoxValidation!: CheckBoxValidation
  @Input() triedToFinishForm!: boolean
  @Output() onCheckboxChanged = new EventEmitter<CheckBoxValidation>

  onTermsOfServiceChange() {
    this.checkBoxValidation = {
      ...this.checkBoxValidation,
      acceptTermsOfService: !this.checkBoxValidation.acceptTermsOfService
    }
    this.onCheckboxChanged.emit(this.checkBoxValidation)
  }

  onTermsOfPrivacyChange() {
    this.checkBoxValidation = {
      ...this.checkBoxValidation,
      acceptTermsOfPrivacy: !this.checkBoxValidation.acceptTermsOfPrivacy
    }
    this.onCheckboxChanged.emit(this.checkBoxValidation)
  }

}
