import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService }     from '../../services/doctor.service';
import { Doctor }            from '../../models/doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  form: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: DoctorService
  ) {
    this.form = this.fb.group({
      dssn:      ['', Validators.required],
      name:      ['', Validators.required],
      startDate: ['', Validators.required],
      specialty: ['', Validators.required],
      officeName:['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors() {
    this.service.list().subscribe(list => this.doctors = list);
  }

  submit() {
    const doc: Doctor = this.form.value;
    console.log("In Submit() - doctors")
    console.log("doc:")
    console.log(doc)

    if (this.editing) {
      this.service.update(doc).subscribe(() => this.reset());
    } else {
      this.service.create(doc).subscribe(() => this.reset());
    }
  }

  edit(doc: Doctor) {
    this.editing = true;
    this.form.patchValue(doc);
  }

  delete(dssn: string) {
    this.service.delete(dssn).subscribe(() => this.loadDoctors());
  }

  reset() {
    this.editing = false;
    this.form.reset();
    this.loadDoctors();
  }
}
