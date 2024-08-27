import { Injectable, inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment';


//import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const AuthInterceptorService: HttpInterceptorFn = (req, next) => {
  let _authService=inject(AuthService);
  let request = req;
  let rutaAPI = req.url.substring(0,environment.APIJSON_URL.length)!=environment.APIJSON_URL?req.url:environment.APIJSON_URL; // RPARRA:25/07/2024-agregado para evitar el uso del token en URL de json
      //if (_authService.MAP_URL.get(req.url) == null  ) { //RPARRA: Se modifica para incluir una ruta genérica
      if (_authService.MAP_URL.get(rutaAPI) == null  ) {
          return from(_authService.ObtenerJwt()).pipe(
              switchMap((jwt) => {
                  const xsrfToken = _authService.generarKey();
                  const clonedReq = req.clone({
                      setHeaders: {
                          Authorization: `Bearer ${jwt}`,
                          'X-XSRF-TOKEN': xsrfToken,
                      },
                  });

                  return next(clonedReq);
              })
          );
      }
      return next(request);
}
