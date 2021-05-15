import Axios from 'axios';
import Item from '../interfaces/Item';
import { API } from '../constants/API';

export default class ItemService {
  /** get inventory items from database */
  static getItems() {
    const url = `${API}/items`;
    return Axios.get(url);
  }

  /** update/insert inventory items from/into database */
  static putItems(request: Item) {
    const url = `${API}/items`;
    return Axios.put(url, request);
  }
}
