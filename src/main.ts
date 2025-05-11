import { bootstrapApplication }           from '@angular/platform-browser';
import { AppComponent }                   from './app/app.component';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { importProvidersFrom }            from '@angular/core';
import { provideHttpClient, withFetch  }  from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(FormsModule),
    provideHttpClient(withFetch()), provideAnimationsAsync()
  ]
}).catch((err) => console.error(err));


