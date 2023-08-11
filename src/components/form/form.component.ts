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

  onCompanyChanged(updatedCompany: Company) {
    this.company = updatedCompany
  }

  onUserChanged(updatedUser: User) {
    this.user = updatedUser
  }

  onContinueClickHandler() {
    this.page++
    if (this.page > 2) {
      this.company = this.emptyCompany
      this.user = this.emptyUser
      this.page = 0
      //TODO change to db handling
      alert('saved')
    }
    console.log(this.user)
    console.log(this.company)
  }

  onBackClickHandler() {
    this.page--
  }
}
