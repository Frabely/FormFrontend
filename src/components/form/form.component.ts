import {Component, OnInit} from '@angular/core';
import de from "./../../constants/de.json"
import {
  CheckBoxValidation,
  Company, CompanyValidation,
  DbCompany,
  DbUser,
  Industry,
  Language,
  User,
  UserValidation
} from "../../constants/types";
import {getCompanyValidation} from "../../functions/validationFunctions";
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
      this.emptyCompany.industry = list[0]
    })

  }

  de: Language = de
  page: number = 0

  industryList: Industry[] = []
  emptyIndustry: Industry = {industryId: -1, name: ''}
  emptyCompany: Company = {companyName: "", industry: this.emptyIndustry}
  emptyUser: User = {
    name: "", firstName: "", username: "", password: "", repPassword: "", email: ""
  }

  company: Company = this.emptyCompany
  user: User = this.emptyUser

  triedToFinishForm = false

  userValidation: UserValidation = {}
  checkBoxValidation: CheckBoxValidation = {
    acceptTermsOfService: false,
    acceptTermsOfPrivacy: false
  }
  companyValidation?: CompanyValidation


  async finishForm() {
    const dbUser: DbUser = {
      username: this.user.username,
      name: this.user.name,
      prevName: this.user.firstName,
      password: this.user.password,
      email: this.user.email
    }
    const dbCompany: DbCompany = {
      id: 0,
      name: this.company.companyName,
      industryId: this.company.industry.industryId
    }
    this.apiService.createUser(dbUser).subscribe()
    this.apiService.createCompany(dbCompany).subscribe()

  }

  onUserValidationChange(userValidation: UserValidation) {
    this.userValidation = userValidation
  }

  onCompanyChanged(updatedCompany: Company) {
    this.company = updatedCompany
  }

  onUserChanged(updatedUser: User) {
    this.user = updatedUser
  }

  onCheckBoxChanged(updatedCheckboxes: CheckBoxValidation) {
    this.checkBoxValidation = updatedCheckboxes
  }

  onContinueClickHandler() {
    // this.companyValidation = {name: false}
    // this.userValidation = {
    //   name: false,
    //   username: false,
    //   repPassword: false,
    //   password: false,
    //   firstName: false,
    //   passwordMatching: false
    // }
    if (this.page === 0) {
      this.companyValidation = getCompanyValidation(this.company)
      if (!this.companyValidation.name) {
        alert(de.alerts.companyNameInvalid)
      } else
        this.page++
    } else if (this.page === 1) {
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
    }
    // else {
    //   this.page++
    // }
  }

  onFinishFormClickHandler() {
    this.triedToFinishForm = true
    if (!this.checkBoxValidation.acceptTermsOfService || !this.checkBoxValidation.acceptTermsOfPrivacy) {
      alert('checkboxes not checked')
    } else {
      this.finishForm().then(() => {
        this.company = this.emptyCompany
        this.user = this.emptyUser
        this.checkBoxValidation = {acceptTermsOfPrivacy: false, acceptTermsOfService: false}
        this.triedToFinishForm = false
        this.page = 0
        alert('saved')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }

  onBackClickHandler() {
    if (this.page === 1) {
      this.companyValidation = {name: true}
    } else if (this.page === 2) {
      this.userValidation = {
        name: true,
        username: true,
        repPassword: true,
        password: true,
        firstName: true,
        passwordMatching: true,
        email: true
      }
    }
    this.page--
  }
}
