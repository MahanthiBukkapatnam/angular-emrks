import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DoctorService } from '../app/emrks/api/doctor.service';
import { Doctor } from '../app/emrks/model/doctor';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-doctor',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  doctor: Doctor = { id: '', name: '', startDate: '', specialty: '', officeName: '' };
  selectedDoctorId: string | undefined | null = null;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctors().subscribe({
      next: (docs: Doctor[]) => {
        console.log('Loaded doctors:', docs);
        this.doctors = docs;
      },
      error: (err) => {
        console.error('Failed to load doctors', err);
        // you could also display a user‐friendly message here
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (this.selectedDoctorId) {
      this.doctorService.updateDoctor(this.selectedDoctorId, this.doctor)
        .subscribe(() => {
          this.loadDoctors();
          this.resetForm(form);
        });
    } else {
      this.doctorService.createDoctor(this.doctor)
        .subscribe(() => {
          this.loadDoctors();
          this.resetForm(form);
        });
    }
  }

  editDoctor(doctor: Doctor): void {
    this.selectedDoctorId = doctor.id;
    this.doctor = { ...doctor };
  }

  deleteDoctor(id: string): void {
    this.doctorService.deleteDoctor(id)
      .subscribe(() => this.loadDoctors());
  }

  resetForm(form: NgForm): void {
    form.resetForm({ id: '', name: '', startDate: '', specialty: '', officeName: '' });
    this.selectedDoctorId = null;
  }

  trackBySSN(_idx: number, d: Doctor) {
    return d.dssn;
  }
}
