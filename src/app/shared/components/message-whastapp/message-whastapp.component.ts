import { Component, ElementRef, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-whastapp',
  standalone: true,
  imports: [ BtnComponent, FontAwesomeModule],
  templateUrl: './message-whastapp.component.html',
  styleUrl: './message-whastapp.component.scss'
})
export class MessageWhastappComponent {
  @Input() mensaje : string = "";
  faXmarkCircle = faXmarkCircle;

  constructor(private elementRef: ElementRef) {}

  cerrar(){
    const event: CustomEvent = new CustomEvent('FormSubmitCustomEvent', {
      bubbles: true,
      detail: { data: 'Hello from button' }
    });

    this.elementRef.nativeElement.dispatchEvent(event);
  }
  enviarMensaje(){
    window.open("https://wa.me/51920376446/?text="+this.mensaje, "_blank");
  }
}
