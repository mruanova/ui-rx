import Axios from 'axios';
import Project from '../interfaces/Project';
import { API } from '../constants/API';

export default class ProjectsService {
  /** get inventory projects from database */
  static getProjects() {
    const url = `${API}/projects`;
    return Axios.get(url);
  }

  /** update/insert inventory projects from/into database */
  static putProjects(request: Project) {
    const url = `${API}/projects`;
    return Axios.put(url, request);
  }
}
