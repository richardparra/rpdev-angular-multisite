import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptors/AuthInterceptorService';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptorService])),
  ]
};
