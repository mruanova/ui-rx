/** 
 * Project
 */
export class Project {
  ProjectId: number = 0;
  Website: string = '';
  Address: string = '';
  Position: string = '';
  Coordinates: number[] = [];
  constructor(obj?: any) {
    if (obj) {
      if (Object.hasOwnProperty.call(obj, 'ProjectId'))
        this.ProjectId = obj.ProjectId;
      if (Object.hasOwnProperty.call(obj, 'Website'))
        this.Website = obj.Website;
      if (Object.hasOwnProperty.call(obj, 'Address'))
        this.Address = obj.Address;
      if (Object.hasOwnProperty.call(obj, 'Position'))
        this.Position = obj.Position;
      if (Object.hasOwnProperty.call(obj, 'Coordinates'))
        this.Coordinates = obj.Coordinates;
    }
  }
}

export default Project;
