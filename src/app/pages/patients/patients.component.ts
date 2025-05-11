import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService }     from '../../services/patient.service';
import { Patient }            from '../../models/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  form: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: PatientService
  ) {
    this.form = this.fb.group({
      pssn:         ['', Validators.required],
      name:         ['', Validators.required],
      bday:         ['', Validators.required],
      contactInfo:  ['', Validators.required],
      allergies:    ['', Validators.required],
      companyName:  ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.service.list().subscribe(list => this.patients = list);
  }

  submit() {
    const doc: Patient = this.form.value;
    console.log("In Submit() - patients")
    console.log("doc:")
    console.log(doc)

    if (this.editing) {
      this.service.update(doc).subscribe(() => this.reset());
    } else {
      this.service.create(doc).subscribe(() => this.reset());
    }
  }

  edit(doc: Patient) {
    this.editing = true;
    this.form.patchValue(doc);
  }

  delete(dssn: string) {
    this.service.delete(dssn).subscribe(() => this.loadPatients());
  }

  reset() {
    this.editing = false;
    this.form.reset();
    this.loadPatients();
  }
}
