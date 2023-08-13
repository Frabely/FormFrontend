import { Injectable } from '@angular/core';
import {BASE_URL, CLIENT_API_ENDPOINT, COMPANY_API_ENDPOINT, INDUSTRY_API_ENDPOINT} from "../constants/constVars";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DbCompany, DbUser, Industry, User} from "../constants/types";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getIndustries(): Observable<Industry[]> {
    return this.http.get(`${BASE_URL}/${INDUSTRY_API_ENDPOINT}`).pipe(map((list: any) => {
      if (list.value) {
        return list.value.map((industry: Industry): Industry => industry);
      }
      return []
    }))
  }

  isUsernameAvailable(username: string): Observable<boolean> {
    return this.http.get(`${BASE_URL}/${CLIENT_API_ENDPOINT}?id=${username.trim()}`).pipe(map((list: any) => {
      return !list.value;
    }))
  }

  createUser(user: DbUser): Observable<DbUser> {
    return this.http.post(`${BASE_URL}/${CLIENT_API_ENDPOINT}`, user).pipe(map((result: any) => {
      if (result)
        return result.value
    }))
  }

  createCompany(company: DbCompany): Observable<DbCompany> {
    return this.http.post(`${BASE_URL}/${COMPANY_API_ENDPOINT}`, company).pipe(map((result: any) => {
      if (result)
        return result.value
    }))
  }
}
