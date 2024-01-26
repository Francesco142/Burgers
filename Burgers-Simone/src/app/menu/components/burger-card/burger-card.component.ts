import { Component, Input } from '@angular/core';
import { Burger } from '../../burger.model';

@Component({
  selector: 'app-burger-card',
  templateUrl: './burger-card.component.html',
  styleUrls: ['./burger-card.component.css']
})
export class BurgerCardComponent {

  @Input('to-display') burger: Burger = {
    id: "",
    title: "",
    meat: "",
    bread: "",
    url: "",
    ingredients: []
  }

}
