import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../../../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-landing-home-s1',
  standalone: true,
  imports: [CommonModule , BtnComponent],
  templateUrl: './landing-home-s1.component.html',
  styleUrl: './landing-home-s1.component.scss'
})
export class LandingHomeS1Component {
  onAddToCart(){
    //demo

  }
  onclick(){

  }
}
