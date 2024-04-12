import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product';

const products = [
  { title: 'A Carpet',price: 100 },
  { title: 'A Book',price: 200 }
];

const newProd = new Product('', -10);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('Not valid');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
