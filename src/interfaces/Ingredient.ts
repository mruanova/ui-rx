/** 
 * Ingredient:
 * one drink has many ingredients
 * one ingredient points to one inventory item
 */
export class Ingredient {
  itemId: number = 0;
  units: number = 0;
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'itemId'))
        this.itemId = obj.itemId;
      if (Object.hasOwnProperty.call(obj, 'units'))
        this.units = obj.units;
    }
  }
}

export default Ingredient;
