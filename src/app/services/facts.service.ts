import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData, CatImage } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  private http = inject(HttpClient);

  public getFact(): Observable<ApiData> {
    return this.http.get<ApiData>('https://meowfacts.herokuapp.com/');
  }

  public getCat(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>('https://api.thecatapi.com/v1/images/search');
  }
}
