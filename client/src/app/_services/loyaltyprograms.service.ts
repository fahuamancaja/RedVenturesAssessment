import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoyaltyProgram } from '../_models/loyaltyprograms';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyprogramsService {
  baseUrl = environment.apiUrl;
  loyaltyPrograms: LoyaltyProgram[] = [];

  constructor(private http: HttpClient) { }

  getLoyaltyPrograms() {
    if(this.loyaltyPrograms.length > 0) return of(this.loyaltyPrograms);
    return this.http.get<LoyaltyProgram[]>(this.baseUrl + 'points').pipe(
      map(loyaltyPrograms => {
        this.loyaltyPrograms = loyaltyPrograms;
        return loyaltyPrograms;
      })
    )
  }

  getLoyaltyProgram(pointId: string) {
    const loyaltyProgram = this.loyaltyPrograms.find(x => x.point_id === pointId);
    if(loyaltyProgram !== undefined) return of(loyaltyProgram);
    return this.http.get<LoyaltyProgram>(this.baseUrl + 'points/' + pointId);
  }
}
