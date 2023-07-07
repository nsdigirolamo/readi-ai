import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  post<T>(url: string, request: unknown | null): Observable<T> {
    return this.httpClient.post<T>(url, request);
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  put<T>(url: string, request: unknown | null): Observable<T> {
    return this.httpClient.put<T>(url, request);
  }

}
