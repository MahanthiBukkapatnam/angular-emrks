import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { DoctorsComponent }     from './pages/doctors/doctors.component';
import { NursesComponent }      from './pages/nurses/nurses.component';
import { PatientsComponent }    from './pages/patients/patients.component';


const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'doctors',    component: DoctorsComponent },
  { path: 'nurses',     component: NursesComponent },
  { path: 'patients',   component: PatientsComponent },

  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
