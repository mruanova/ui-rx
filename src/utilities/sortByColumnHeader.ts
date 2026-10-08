import Project from '../interfaces/Project';
import SortOrder from '../enums/SortOrder';
// import { compareAsc, compareDesc } from 'date-fns';

function sortByColumnHeader(
  projects: Project[],
  order: SortOrder,
  property: string,
): Project[] {
  const sortedProjects = [...projects];

  switch (property) {
    case 'ProjectId':
      if (order === SortOrder.asc) {
        sortedProjects.sort((a: Project, b: Project) => a.ProjectId - b.ProjectId);
      } else if (order === SortOrder.desc) {
        sortedProjects.sort((a: Project, b: Project) => b.ProjectId - a.ProjectId);
      }
      break;
    case 'Position':
      if (order === SortOrder.asc) {
        sortedProjects.sort((a: Project, b: Project) => a.Position.localeCompare(b.Position));
      } else if (order === SortOrder.desc) {
        sortedProjects.sort((a: Project, b: Project) => b.Position.localeCompare(a.Position));
      }
      break;
    case 'Website':
      if (order === SortOrder.asc) {
        sortedProjects.sort((a: Project, b: Project) => a.Website.localeCompare(b.Website));
      } else if (order === SortOrder.desc) {
        sortedProjects.sort((a: Project, b: Project) => b.Website.localeCompare(a.Website));
      }
      break;
    case 'Address':
      if (order === SortOrder.asc) {
        sortedProjects.sort((a: Project, b: Project) => a.Address.localeCompare(b.Address));
      } else if (order === SortOrder.desc) {
        sortedProjects.sort((a: Project, b: Project) => b.Address.localeCompare(a.Address));
      }
      break;
    case 'Coordinates':
      if (order === SortOrder.asc) {
        sortedProjects.sort((a: Project, b: Project) => {
          return (
            parseFloat(String(a.Coordinates[1] ?? 0)) -
            parseFloat(String(b.Coordinates[1] ?? 0))
          );
        });
      } else if (order === SortOrder.desc) {
        sortedProjects.sort((a: Project, b: Project) => {
          return (
            parseFloat(String(b.Coordinates[1] ?? 0)) -
            parseFloat(String(a.Coordinates[1] ?? 0))
          );
        });
      }
      break;
    default:
      break;
  }

  return sortedProjects;
}

export default sortByColumnHeader;
