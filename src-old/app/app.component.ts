import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DoctorComponent } from './doctor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoctorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//  title = 'angular-emrks';

  cards = [
    { title: 'Create Appointment', icon: 'event', route: '/appointments/new' },
    { title: 'Patient Dashboard', icon: 'dashboard', route: '/patients' },
    { title: 'View Doctors', icon: 'local_hospital', route: '/doctors' },
    { title: 'View Pharmacy', icon: 'shopping_cart', route: '/pharmacy' },
    { title: 'Insurance Details', icon: 'verified_user', route: '/insurance' },
    { title: 'Medical Tests', icon: 'science', route: '/tests' }
  ];

}


