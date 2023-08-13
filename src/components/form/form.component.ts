import {Component, OnInit} from '@angular/core';
import de from "./../../constants/de.json"
import {Company, Industry, Language, User, UserValidation} from "../../constants/types";
import {getCompanyValidation, getUserValidation} from "../../functions/validationFunctions";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  fetchedIndustryList$?: Observable<Industry[]>

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.fetchedIndustryList$ = this.apiService.getIndustries()
    this.fetchedIndustryList$.subscribe((list: Industry[]) => {
      this.industryList = list
      this.emptyCompany.industry = list[0].name
    })
  }

  de: Language = de
  page: number = 1

  industryList: Industry[] = []
  emptyCompany: Company = {companyName: "", industry: ""}
  emptyUser: User = {
    name: "", firstName: "", username: "", password: "", repPassword: "", email: ""
  }

  company: Company = this.emptyCompany
  user: User = this.emptyUser

  userValidation?: UserValidation

  onUserValidationChange(userValidation: UserValidation) {
      this.userValidation = userValidation
  }

  onCompanyChanged(updatedCompany: Company) {
    this.company = updatedCompany
  }

  onUserChanged(updatedUser: User) {
    this.user = updatedUser
  }

  onContinueClickHandler() {
    if (this.page === 0) {
      const companyValidation = getCompanyValidation(this.company)
      if (!companyValidation.name) {
        alert(de.alerts.companyNameInvalid)
      } else {
        // this.page++
      }
    }
    if (this.page === 1) {
      let alertMsg: string = ''
      if (!this.userValidation?.name)
        alertMsg += de.alerts.invalidName + '\n'
      if (!this.userValidation?.firstName)
        alertMsg += de.alerts.invalidFirstName + '\n'
      if (!this.userValidation?.username)
        alertMsg += de.alerts.invalidUsername + '\n'
      if (!this.userValidation?.password)
        alertMsg += de.alerts.invalidPassword + '\n'
      if (!this.userValidation?.repPassword || !this.userValidation?.passwordMatching)
        alertMsg += de.alerts.passwordsNotMatching + '\n'
      if (this.userValidation?.email !== undefined && !this.userValidation?.email)
        alertMsg += de.alerts.invalidEmail + '\n'
      if (alertMsg !== '')
        alert(alertMsg)
      else
        this.page++
    } else {
      this.page++
      if (this.page > 2) {
        this.company = this.emptyCompany
        this.user = this.emptyUser
        this.page = 0
        //TODO change to db handling
        alert('saved')
      }
    }
  }

  onBackClickHandler() {
    this.page--
  }

  protected readonly getUserValidation = getUserValidation;
}
