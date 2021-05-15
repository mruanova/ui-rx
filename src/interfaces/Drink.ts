import Ingredient from './Ingredient';
/** 
 * Drink:
 * coffee
 * decaf-coffee
 * caffe-latte 
 * cafe-americano
 * cafe-mocha
 * capuccino
 */
export class Drink {
  id: number = 0
  name: string = '';
  ingredients: Ingredient[] = [];
  cost: number = 0;
  receipt: string = '';
  cashier: string = '';
  timestamp: string = '';
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'id'))
        this.id = obj.id;
      if (Object.hasOwnProperty.call(obj, 'name'))
        this.name = obj.name;
      if (Object.hasOwnProperty.call(obj, 'ingredients'))
        this.ingredients = obj.ingredients;
      if (Object.hasOwnProperty.call(obj, 'cost'))
        this.cost = obj.cost;
      if (Object.hasOwnProperty.call(obj, 'receipt'))
        this.receipt = obj.receipt;
      if (Object.hasOwnProperty.call(obj, 'cashier'))
        this.cashier = obj.cashier;
      if (Object.hasOwnProperty.call(obj, 'timestamp'))
        this.timestamp = obj.timestamp;
    }
  }
}

export default Drink;
