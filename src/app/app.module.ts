import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule, Configuration } from './api';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, DoctorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot(() => new Configuration({
      basePath: 'http://localhost:8080'
    })),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

