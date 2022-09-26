import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Book {
  _id!: string;
  name!: string;
  price!: string;
  description!: string;

  constructor() { }
}
