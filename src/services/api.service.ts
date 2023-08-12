import { Injectable } from '@angular/core';
import {BASE_URL, INDUSTRY_API_ENDPOINT} from "../constants/constVars";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Industry} from "../constants/types";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getIndustries(): Observable<Industry[]> {
    return this.http.get(`${BASE_URL}/${INDUSTRY_API_ENDPOINT}`).pipe(map((list: any) => {
      if (list.value) {
        return list.value.map((name: string): Industry => ({ name }));
      }
      return []
    }))
  }
}
