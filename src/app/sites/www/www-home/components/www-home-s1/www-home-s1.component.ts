import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../../../../../shared/components/btn/btn.component';

@Component({
  selector: 'app-www-home-s1',
  standalone: true,
  imports: [CommonModule , BtnComponent],
  templateUrl: './www-home-s1.component.html',
  styleUrl: './www-home-s1.component.scss'
})
export class WwwHomeS1Component {
  onAddToCart(){
    //demo

  }
  onclick(){

  }
}
