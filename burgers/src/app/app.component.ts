import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  title = 'burgers';

  // tipo never?
  
  panini : Burger[] = [];

  constructor(private http: HttpClient) {


     this.http.get<Burger[]>('http://localhost:8000/Burgers').subscribe( (burgers) => {

     this.panini = burgers;

    } )

  }

}
