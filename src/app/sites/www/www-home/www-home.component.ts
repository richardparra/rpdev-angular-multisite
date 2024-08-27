import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogModule, Dialog } from '@angular/cdk/dialog'; //Dialog es Servicio

//Shared components
import { MessageDialogComponent } from '../../../shared/components/message-box/message-dialog.component';

import { OfertaService } from '../../../core/services/oferta.service';
import { OfertaResponse, Seccion } from '../../../core/models/oferta.model';

import { WwwHomeS1Component } from './components/www-home-s1/www-home-s1.component';
import { WwwHomeS2Component } from './components/www-home-s2/www-home-s2.component';
import { BannerModel } from '../../../core/models/banner.model';

@Component({
  selector: 'app-www-home',
  standalone: true,
  imports: [WwwHomeS1Component, WwwHomeS2Component, MessageDialogComponent , DialogModule],
  templateUrl: './www-home.component.html',
  styleUrl: './www-home.component.scss'
})
export class WwwHomeComponent {
  //Variables para la carga del json de oferta
  oferta!: OfertaResponse;
  ofertaCargada: Boolean = false;
  banners!: BannerModel[];
  seccion1 : Seccion = {"nivel":1, "titsec":"","dessec":"", "informaciones":[]}
  seccion2 : Seccion = {"nivel":2, "titsec":"","dessec":"", "informaciones":[]}
  seccion3 : Seccion = {"nivel":3, "titsec":"","dessec":"", "informaciones":[]}
  seccion4 : Seccion = {"nivel":4, "titsec":"","dessec":"", "informaciones":[]}
  seccion5 : Seccion = {"nivel":4, "titsec":"","dessec":"", "informaciones":[]}

  constructor(
    private ofertaService: OfertaService,
    private router: Router,
    private dialog: Dialog,
    ){}

  cargarJSON(urlcarga: string){
    this.ofertaService.getOferta(urlcarga).subscribe({
      next:(data) => {
        this.oferta = data[0];
        this.ofertaCargada=true;
        this.banners = this.oferta.banners;
        this.seccion1 = this.oferta.secciones[0];
        this.seccion2 = this.oferta.secciones[1];
        this.seccion3 = this.oferta.secciones[2];
        this.seccion4 = this.oferta.secciones[3];
        this.seccion5 = this.oferta.secciones[4];

      },
      error:(err)=>{
        this.router.navigate(['/', ''])
        .then(() => {
          window.location.reload();
        });
        this.triggerMessage("NO AUTORIZADO","NO TIENE AUTORIZACIÓN PARA ACCEDER A ESTA OFERTA","alert","Aceptar");
      }
    });
  }
  ngOnInit(): void {

    this.cargarJSON("data/HOME/json/banners.json")

  }

  triggerMessage(title: String, msg: String,  type: String, buttontext: String) {
    this.dialog.open(MessageDialogComponent, {
      minWidth: '400px',
      maxWidth: '50%',
      data: {
        msg,
        title,
        type,
        buttontext,
      },
    });
  }
}
