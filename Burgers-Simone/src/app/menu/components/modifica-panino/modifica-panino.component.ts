import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, concatMap, takeUntil } from 'rxjs';
import { Burger } from '../../burger.model';

@Component({
  selector: 'app-modifica-panino',
  templateUrl: './modifica-panino.component.html',
  styleUrls: ['./modifica-panino.component.css']
})
export class ModificaPaninoComponent implements OnInit, OnDestroy {
  
  paninoDaModificare: Burger = {
    id: 0,
    title: '',
    bread: '',
    meat: '',
    url: '',
    ingredients: []
  };

  private ngUnsubscribe = new Subject();

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activeRoute.params.pipe(takeUntil(this.ngUnsubscribe), concatMap( params => this.http.get<Burger>(`http://localhost:3000/burgers/${params['id']}`))).subscribe({

      next: burgers => {
        this.paninoDaModificare = burgers;
        console.log(burgers);
      },
      error: error => {
        console.error('Errore durante il recupero del panino:', error);
      }
     
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.complete();
  }
}
