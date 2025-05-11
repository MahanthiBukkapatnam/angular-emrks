import { provideServerRendering }   from '@angular/platform-server';
import { appConfig }                from './app.config';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);


