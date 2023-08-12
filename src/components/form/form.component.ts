import {Component, OnInit} from '@angular/core';
import de from "./../../constants/de.json"
import {Company, Industry, Language, User} from "../../constants/types";
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
      this.emptyCompany.industry = list[0].name
    })
  }

  de: Language = de
  page: number = 0

  industryList: Industry[] = []
  emptyCompany: Company = {companyName: "", industry: ""}
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
    if (this.page === 0) {
      const companyValidation = getCompanyValidation(this.company)
      if (!companyValidation.name) {
        alert(de.alerts.companyNameInvalid)
      } else {
        console.log(this.company)
        this.page++
      }
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
}
