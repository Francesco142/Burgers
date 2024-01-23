import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'burgers';

  panini = {};


  constructor(private http: HttpClient) {
  
    this.http.get('http://localhost:3000/Burgers').subscribe( (panini) => {

      console.log("Data get: ", panini);

      this.panini = panini;
      

    } )

  }

}
