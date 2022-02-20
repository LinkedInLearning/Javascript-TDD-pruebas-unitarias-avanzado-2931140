import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '@yfx-data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private dishes: Dish[] = [];

  constructor(private http: HttpClient) {}

  get(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://i-dont-know-the-url.yet.com/dishes');
  }

  availableDishes(): Dish[] {
    return this.dishes.filter((dish) => dish.available);
  }
}
