import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../../burger.service';
import { Burger } from '../../burger.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  selectedMeat: string = "";
  selectedBread: string = "";
  selectedIngredient: string = "";

  filter: { [key: string]: string } = {}

  fields: { [key: string]: string } = {
    meat: "",
    bread: "",
    ingredients: ""
  }


  updateFilters() {
    Object.keys(this.fields).forEach(key => this.fields[key] === '' ? delete this.fields[key] : key);
    this.filter = Object.assign({}, this.fields);
  }


  constructor(private burgerService: BurgerService) {
    this.burgers$ = this.burgerService.fetchBurgers()
  }

  burgers$: Observable<Burger[]>;

  ngOnInit() { }

}
