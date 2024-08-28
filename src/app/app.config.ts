import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { APP_ROUTES } from './app.routes';
import { environment } from '../assets/environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
]
};
