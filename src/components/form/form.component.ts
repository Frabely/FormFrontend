import {Component} from '@angular/core';
import de from "./../../constants/de.json"
import {Company, Industry, Language, User} from "../../constants/types";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  de: Language = de

  page: number = 0

  industryList: Industry[] = [{name: "test1"}, {name: "test2"}]
  emptyCompany: Company = {companyName: "", industry: this.industryList[0].name}
  emptyUser: User = {
    name: "", firstName: "", username: "", password: "", repPassword: "", email: ""
  }

  company: Company = this.emptyCompany
  user: User = this.emptyUser

  onCompanyChange(event: any) {
    this.company = {...this.company, companyName: event.target.value}
  }

  onContinueClickHandler() {
    this.page++
    if (this.page > 2) {
      this.company = this.emptyCompany
      this.user = this.emptyUser
    }
  }

  onBackClickHandler() {
    this.page--
  }

  onIndustryChange(event: any) {
    this.company.industry = event.target.value;
  }

  onUserNameChangeHandler(event: any) {
    this.user = {...this.user, name: event.target.value}
  }

  onUserFirstNameChangeHandler(event: any) {
    this.user = {...this.user, firstName: event.target.value}
  }

  onUserUsernameChangeHandler(event: any) {
    this.user = {...this.user, username: event.target.value}
  }

  onUserPasswordChangeHandler(event: any) {
    this.user = {...this.user, password: event.target.value}
  }

  onUserRepPasswordChangeHandler(event: any) {
    this.user = {...this.user, repPassword: event.target.value}
  }

  onUserEmailChangeHandler(event: any) {
    this.user = {...this.user, email: event.target.value}
  }
}
