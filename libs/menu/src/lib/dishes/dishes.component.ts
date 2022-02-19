import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  ngOnInit(): void {
    const test = 'Hola Mundo';

    console.log(test);
  }

  getDishes(
    type: string,
    count: number,
    taste: string,
    inStock: boolean
  ): string {
    let selection = '';

    if (type === 'vegan' && count > 2 && taste !== 'spicy') {
      selection = `${count} ${type} dishes, no spicy`;
    }
    this.validate(inStock);

    return selection;
  }

  validate(inStock: boolean) {
    if (inStock) {
      console.log(inStock);
    }
  }
}
