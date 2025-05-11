import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Nurse }       from '../models/nurse.model';


@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private apiUrl = 'http://localhost:8080/api/nurses';  // adjust if your base path differs

  constructor(private http: HttpClient) { }

  list(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl);
  }

  create(nurse: Nurse): Observable<Nurse> {
    return this.http.post<Nurse>(this.apiUrl, nurse);
  }

  update(nurse: Nurse): Observable<Nurse> {
    return this.http.put<Nurse>(`${this.apiUrl}/${nurse.nssn}`, nurse);
  }

  delete(nssn: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${nssn}`);
  }

}
