import { SweetType, Taste } from './types';

export interface Country {
  name: string;
  language: string;
}

export interface Dish {
  taste: Taste;
  name: string;
  country: Country;
}

export interface Dessert {
  type: SweetType;
  name: string;
}
