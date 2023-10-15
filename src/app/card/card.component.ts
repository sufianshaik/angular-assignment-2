import { Component, Input } from '@angular/core';
import { cardDetails } from '../app.component'; 


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input () cardContent! : cardDetails ;
}