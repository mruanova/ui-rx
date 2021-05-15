/** 
 * Item:
 * coffee
 * decaf-coffee
 * espresso
 * sugar
 * cocoa
 * cream
 * whipped-cream
 * foamed-cream
 * steamed-milk
 */
export class Item {
  id: number = 0;
  name: string = '';
  units: number = 0;
  cost: number = 0;
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'id'))
        this.id = obj.id;
      if (Object.hasOwnProperty.call(obj, 'name'))
        this.name = obj.name;
      if (Object.hasOwnProperty.call(obj, 'units'))
        this.units = obj.units;
      if (Object.hasOwnProperty.call(obj, 'cost'))
        this.cost = obj.cost;
    }
  }
}

export default Item;
