import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import { UtilidadService } from './utilidad.service';
import { ModelToken } from '../models/model-token';
import { timeout , catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private utilidadService: UtilidadService) { }

  public generarKey(): string {
    const guid = uuidv4();
    let key = CryptoJS.enc.Utf8.parse(environment.secretKey);
    const xsrfToken = CryptoJS.AES.encrypt(guid, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    return xsrfToken;
  }

  public async ObtenerJwt(): Promise<string> {
    let token: string = '';
    try {
      const xsrfToken = this.generarKey();
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('X-XSRF-TOKEN', xsrfToken);
      const body = {};
      const data = await
        this.httpClient
          .post<ModelToken>(environment.URL_OBTENER_TOKEN, body, {
            headers,
          })
          .pipe(
            timeout(30000),
            catchError((e) => {
              throw e;
            })
          ).toPromise()
      ;
      if (data != null && this.utilidadService.getString(data.TOKEN) != '') {
        token = this.utilidadService.getString(data.TOKEN);
      }
    } catch (e) { }
    return token;
  }

  public MAP_URL = new Map<string, string>([
    [environment.URL_OBTENER_TOKEN, environment.URL_OBTENER_TOKEN],
    [environment.APIJSON_URL, environment.APIJSON_URL],
  ]);

}
