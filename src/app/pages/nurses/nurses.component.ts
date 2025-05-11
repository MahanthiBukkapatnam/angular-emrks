import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NurseService }     from '../../services/nurse.service';
import { Nurse }            from '../../models/nurse.model';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent implements OnInit {
  nurses  : Nurse[] = [];
  form    : FormGroup;
  editing : boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: NurseService
  ) {
    this.form = this.fb.group({
      nssn:         ['', Validators.required],
      name:         ['', Validators.required],
      contactInfo:  ['', Validators.required],
      officeName:   ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadNurses();
  }

  loadNurses() {
    this.service.list().subscribe(list => this.nurses = list);
  }

  submit() {
    const doc: Nurse = this.form.value;
    console.log("In Submit() - nurses")
    console.log("doc:")
    console.log(doc)

    if (this.editing) {
      this.service.update(doc).subscribe(() => this.reset());
    } else {
      this.service.create(doc).subscribe(() => this.reset());
    }
  }

  edit(doc: Nurse) {
    this.editing = true;
    this.form.patchValue(doc);
  }

  delete(nssn: string) {
    this.service.delete(nssn).subscribe(() => this.loadNurses());
  }

  reset() {
    this.editing = false;
    this.form.reset();
    this.loadNurses();
  }
}
