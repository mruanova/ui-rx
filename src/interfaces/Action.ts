import Drink from './Drink';
import Item from './Item';
/** 
 * Action:
 * 1) sell drink and discount inventory items
 * 2) restock inventory item and clear last sale
 */
export class Action {
  sale: Drink = new Drink();
  item: Item = new Item();
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'sale'))
        this.sale = obj.sale;
      if (Object.hasOwnProperty.call(obj, 'item'))
        this.item = obj.item;
    }
  }
}

export default Action;
