import Project from '../interfaces/Project';
import SortOrder from '../enums/SortOrder';
// import { compareAsc, compareDesc } from 'date-fns';

function sortByColumnHeader(
  projects: Project[],
  order: SortOrder,
  property: string,
): Project[] {
  let temp: Project[] = projects;
  switch (property) {
    case 'ProjectId':
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return a.ProjectId - b.ProjectId;
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return b.ProjectId - a.ProjectId;
        });
      }
      break;
    case 'Position':
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return a.Position.localeCompare(b.Position);
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return b.Position.localeCompare(a.Position);
        });
      }
      break;
    case 'Website':
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return a.Website.localeCompare(b.Website);
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return b.Website.localeCompare(a.Website);
        });
      }
      break;
    case 'Address':
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return a.Address.localeCompare(b.Address);
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return b.Address.localeCompare(a.Address);
        });
      }
      break;
    case 'Coordinates':
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return (
            parseFloat(a.Coordinates[1].toString()) -
            parseFloat(b.Coordinates[1].toString())
          );
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return (
            parseFloat(b.Coordinates[1].toString()) -
            parseFloat(a.Coordinates[1].toString())
          );
        });
      }
      break;
    default:
      /*
      if (order === SortOrder.asc) {
        temp = temp.sort((a: Project, b: Project) => {
          return compareAsc(new Date(a.startDate), new Date(b.startDate));
        });
      } else if (order === SortOrder.desc) {
        temp = temp.sort((a: Project, b: Project) => {
          return compareDesc(new Date(a.startDate), new Date(b.startDate));
        });
      }
      */
      break;
  }
  return temp;
}

export default sortByColumnHeader;
