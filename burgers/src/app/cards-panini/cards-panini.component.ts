import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Burger{

  id : number;
  title : string;
  pane : string;
  carne : string;
  salsa : string;

}


@Component({
  selector: 'app-cards-panini',
  templateUrl: './cards-panini.component.html',
  styleUrls: ['./cards-panini.component.css']
})
export class CardsPaniniComponent implements OnInit{

  @Input() paninoInput : Burger = {
    id: 0,
    title: '',
    pane: '',
    carne: '',
    salsa: ''
  };


  ngOnInit(): void {
  
      console.log("Panino Input: " , this.paninoInput);

  }

  constructor (private router: Router) {}

  navigateToChild() {
    this.router.navigate(['/panino', this.paninoInput.id]);
  }


}
