import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Burger {
  id: number;
  title: string;
  pane: string;
  carne: string;
  salsa: string;
}

@Component({
  selector: 'app-modifica-panino',
  templateUrl: './modifica-panino.component.html',
  styleUrls: ['./modifica-panino.component.css']
})
export class ModificaPaninoComponent implements OnInit, OnDestroy {
  paninoDaModificare: Burger = {
    id: 0,
    title: '',
    pane: '',
    carne: '',
    salsa: ''
  };

  private ngUnsubscribe = new Subject();

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: params => {
        const id = params['id'];
        this.http.get<Burger>(`http://localhost:8000/Burgers/${id}`).subscribe({
          next: burgers => {
            this.paninoDaModificare = burgers;
            console.log(burgers);
          },
          error: error => {
            console.error('Errore durante il recupero del panino:', error);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.complete();
  }
}
