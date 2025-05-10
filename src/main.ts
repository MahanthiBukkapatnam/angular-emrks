import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig }    from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch  } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(FormsModule),
    provideHttpClient(withFetch())
  ]
}).catch((err) => console.error(err));
