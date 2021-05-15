import Axios from 'axios';
import Drink from '../interfaces/Drink';
import { API } from '../constants/API';

export default class DrinksService {
  /** get drinks from database */
  static getDrinks() {
    const url = `${API}/drinks`;
    return Axios.get(url);
  }

  /** update/insert drinks from/into database */
  static putDrinks(request: Drink) {
    const url = `${API}/drinks`;
    return Axios.put(url, request);
  }
}
