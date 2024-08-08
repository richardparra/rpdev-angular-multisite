import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { OfertaResponse } from '../models/oferta.model';
import { UtilidadService } from './utilidad.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  constructor(private utilidadService: UtilidadService) {
  }
  private httpClient = inject(HttpClient)
  apiJSONURL = environment.APIJSON_URL;

  getOferta( code: String ){
    this.utilidadService.console_log('Buscando oferta');
    const filename = code+".json";
    return this.httpClient.get<OfertaResponse[]>(`${this.apiJSONURL}/${filename}` );
  }

}
