import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  getproducts(budget: any, skinType: any, concern1: any, concern2: any) {
    var url: URL = new URL('http://localhost:3000/products?');

    url.searchParams.append('Budget_lte', budget);
    url.searchParams.append('SkinType', skinType);
    url.searchParams.append('Concern1', concern1);
    url.searchParams.append('Concern2', concern2);

    const link: string = url.toString();
    return this._http.get<any>(link).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
