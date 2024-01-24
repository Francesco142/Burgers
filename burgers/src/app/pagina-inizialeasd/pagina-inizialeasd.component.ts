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
  selector: 'app-pagina-inizialeasd',
  templateUrl: './pagina-inizialeasd.component.html',
  styleUrls: ['./pagina-inizialeasd.component.css']
})
export class PaginaInizialeasdComponent {

  title = 'burgers';

  // tipo never?
  
  panini : Burger[] = [];

  constructor(private http: HttpClient) {


     this.http.get<Burger[]>('http://localhost:8000/Burgers').subscribe( (burgers) => {

     this.panini = burgers;

    } )

  }

}
