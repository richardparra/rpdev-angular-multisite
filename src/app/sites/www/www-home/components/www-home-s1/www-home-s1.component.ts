import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerCarouselComponent } from '../../../../../shared/components/banner-carousel/banner-carousel.component';
import { BannerModel } from '../../../../../core/models/banner.model';

import { BtnComponent } from '../../../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-www-home-s1',
  standalone: true,
  imports: [CommonModule , BtnComponent, BannerCarouselComponent],
  templateUrl: './www-home-s1.component.html',
  styleUrl: './www-home-s1.component.scss'
})
export class WwwHomeS1Component {
  setupCarousel = {
    'h-[289px]': true,
    'md:h-196': true,
    'lg:h-[580px]': true,
  };
  cardsCarousel: BannerModel[] = [
    {
      title: 'MAESTRIA EN EDUCACIÓN',
      slogan:'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software & APIs to accept payments, send payouts',
      bglg: '/assets/images/banner01-1440x538_95p.webp',
      bgsm: '/assets/images/banner01-1440x538_95p_sm.webp',
      image: '',
    },
    {
      title: 'MAESTRIA EN TELEFORMACION',
      slogan:'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software & APIs to accept payments, send payouts',
      bglg: '/assets/images/banner04.webp',
      bgsm: '/assets/images/banner04sm.webp',
      image: '',
    },
    {
      title: 'MAESTRIA EN PLATAFORMAS EDUCATIVAS',
      slogan:'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software & APIs to accept payments, send payouts',
      bglg: '/assets/images/banner01.webp',
      bgsm: '',
      image: '',
    },
  ];

  onAddToCart(){
    //demo

  }
  onclick(){

  }
}
