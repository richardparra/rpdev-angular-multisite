import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() image: string = '' ;
  @Input() color: string = 'success';
  @Input() opacity: '1' | '0'='0';
  @Input() disabled: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

  get mycolors(){

    return {
      "text-secondary-700": this.color ==='success',
      "bg-success-500": this.color ==='success',
      "font-bold": this.color ==='success',
      "hover:bg-success-900": this.color ==='success',
      "focus:ring-success-300": this.color ==='success',
      "border-success-500": this.color ==='success' ,
      "text-info-50": this.color ==='info',
      "bg-info-600": this.color ==='info',
      "hover:bg-info-500": this.color ==='info',
      "focus:ring-info-300": this.color ==='info',
      "text-warning-50": this.color ==='warning',
      "bg-warning-600": this.color ==='warning',
      "hover:bg-warning-500": this.color ==='warning',
      "focus:ring-warning-300": this.color ==='warning',
      "text-danger-50": this.color ==='danger',
      "bg-danger-600": this.color ==='danger',
      "hover:bg-danger-500": this.color ==='danger',
      "focus:ring-danger-300": this.color ==='danger',

      "bg-primary-500": this.color ==='primary',
      "hover:bg-primary-400": this.color ==='primary',
      "focus:ring-primary-300": this.color ==='primary',
      "text-secondary-50": this.color ==='secondary',
      "bg-secondary-600": this.color ==='secondary',
      "hover:bg-secondary-500": this.color ==='secondary',
      "focus:ring-secondary-300": this.color ==='secondary',
      "text-white": this.color ==='black' || this.color ==='transparent' || this.color ==='primary',
      "bg-black": this.color ==='black',
      "hover:bg-gray-700": this.color ==='black',
      "focus:ring-gray-300": this.color ==='black',
      "text-gray-800": this.color ==='white',
      "bg-white": this.color ==='white',
      "hover:bg-gray-200": this.color ==='white',
      "focus:ring-gray-200": this.color ==='white',
      "border-gray-200": this.color ==='white',
      "border": this.color ==='transparent' || this.color ==='success' ,
      "border-white border-opacity-30": this.color ==='transparent' ,
      "opacity-30":this.opacity==='1',
    }
  }

}
