import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Patient }       from '../models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/patients';  // adjust if your base path differs

  constructor(private http: HttpClient) { }

  list(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  create(doc: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, doc);
  }

  update(doc: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${doc.pssn}`, doc);
  }

  delete(pssn: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${pssn}`);
  }

}
