import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, tap } from "rxjs";
import { Burger } from "./burger.model";

const url = "http://localhost:3000/burgers"

@Injectable({ providedIn: "root" })
export class BurgerService {

    constructor(private http: HttpClient) { }
    
    fetchBurgers() {
        return this.http.get<Burger[]>(url).pipe(tap(x => console.table(x)), delay(1500))
    }
}