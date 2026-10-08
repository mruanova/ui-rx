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
      this.ProjectId = obj.ProjectId ?? obj.id ?? this.ProjectId;
      this.Website = obj.Website ?? this.Website;
      this.Address = obj.Address ?? this.Address;
      this.Position = obj.Position ?? this.Position;
      this.Coordinates = Array.isArray(obj.Coordinates)
        ? obj.Coordinates
        : this.Coordinates;
    }
  }
}

export default Project;
