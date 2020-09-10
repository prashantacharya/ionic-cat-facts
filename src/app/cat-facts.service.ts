import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  constructor(private http: HttpClient) {}

  getCatFacts(): Observable<any> {
    return this.http.get<any>('https://cat-fact.herokuapp.com/facts');
  }
}
