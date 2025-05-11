import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Card {
  title: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],  // Provides NgFor and other common directives
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: Card[] = [
    { title: 'Appointments', route: '/appointments/new' },
    { title: 'Patient Dashboard', route: '/patients' },
    { title: 'View Doctors', route: '/doctors' },
    { title: 'View Pharmacy', route: '/pharmacy' },
    { title: 'Insurance Details', route: '/insurance' },
    { title: 'Medical Tests', route: '/tests' }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

