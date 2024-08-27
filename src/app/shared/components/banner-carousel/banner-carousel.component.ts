import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperDirective } from '../../directives/swiper.directive';
import {CUSTOM_ELEMENTS_SCHEMA, AfterViewInit,ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { BannerModel } from '../../../core/models/banner.model';
//import { BigButtonComponent } from '../big-button/big-button.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-banner-carousel',
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  templateUrl: './banner-carousel.component.html',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class BannerCarouselComponent implements  AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  //propiedades del componente
  @Input() showThumbnail:boolean = true;
  @Input() InputContents: BannerModel[] =[];
  @Input() ThumbnailQty:number = 0;
  @Input() slidesPerViewLG:number =0;
  @Input() slidesPerViewMD:number =0;

  contents: BannerModel[] = []; // Los contenidos se reciben desde el origen y se cargan en onInit()
  index = 0;
  setupClass = 'border border-gray-600 w-full p-0 img1 h-[480px] md:h-96 lg:h-[580px] text-left subpixel-antialiased flex justify-center';
  @Input() setup: object ={
      "h-52":true,
      "md:h-96": true,
      "lg:h-[580px]":true
  }
  ngOnInit() {

    this.contents = this.InputContents;
    this.ThumbnailQty = this.contents.length;


    //volver a cargar la configuración de thumbnails
    this.swiperThumbsConfig = {
      spaceBetween: 10,
      slidesPerView:  this.ThumbnailQty ,
      freeMode: true,
      watchSlidesProgress: true,
    }

    this.swiperConfig = {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        enabled:true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination:{
        enabled: true,
        clickable:true
      },
      autoplay:{
        delay: 5000,
      },
      breakpoints:{
        320: {
          slidesPerView: 1,
          navigation: {
            enabled:false,
          }
        },
        640: {
          slidesPerView: this.slidesPerViewMD,
        },
        1024: {
          slidesPerView: this.slidesPerViewLG,
        },
      }
    }
  }

constructor(){}

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      enabled:false,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination:{
      enabled: true,
      clickable:true
    },
    autoplay:{
      delay: 3000,
    },
    breakpoints:{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: this.slidesPerViewMD,
      },
      1024: {
        slidesPerView: this.slidesPerViewLG,
      },
    }
  }

  swiperThumbsConfig: SwiperOptions = {} // Se carga vacio porque se cargará en onInit()

  ngAfterViewInit() {
    console.log('init1');
    //this.swiper.nativeElement.swiper.activeIndex = this.index;
    //this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
    //this.swiper.nativeElement.swiper.autoplay.start();
    console.log('init2');
  }

  slideChange(swiper: any) {
    alert('b');
    this.index = swiper.detail[0].activeIndex;
  }


}
