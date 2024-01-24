import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Burger{

  id : number;
  title : string;
  pane : string;
  carne : string;
  salsa : string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor (private router: Router) {}

  navigateToNewPage() {
    this.router.navigate(['/ordini']);
  }

}
