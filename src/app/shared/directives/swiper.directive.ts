import { AfterViewInit, Directive, ElementRef, Input  } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types'
import { UtilidadService } from '../../core/services/utilidad.service';

@Directive({
  selector: '[appSwiper]',
  standalone: true
})
export class SwiperDirective {
  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>, private utilidadService: UtilidadService) { }

  ngAfterViewInit(): void {
    this.utilidadService.console_log('SwiperDirective');
    this.utilidadService.console_log(this.config?.slidesPerView);
    this.utilidadService.console_log(this.el.nativeElement);

    Object.assign(this.el.nativeElement, this.config);
    console.log("veremos si la directiva aplica");
    const params = {
      // array with CSS styles
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background-color: red;
          padding: 8px 16px;
          border-radius: 100%;
          border: 2px solid black;
          color: red;
        }
        .swiper-pagination-bullet{
          width: 40px;
          height: 40px;
          background-color: red;
        }
        `,
      ],

      // array with CSS urls
      injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
    };
    Object.assign(this.el.nativeElement, params);

    this.el.nativeElement.initialize();

    this.el.nativeElement.swiper.autoplay.start();

  }


}
