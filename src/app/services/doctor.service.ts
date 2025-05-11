import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Doctor }       from '../models/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8080/api/doctors';  // adjust if your base path differs

  constructor(private http: HttpClient) { }

  list(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  create(doc: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doc);
  }

  update(doc: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${doc.dssn}`, doc);
  }

  delete(dssn: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dssn}`);
  }

}
