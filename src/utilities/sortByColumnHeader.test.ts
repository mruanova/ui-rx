import Project from '../interfaces/Project';
import SortOrder from '../enums/SortOrder';
import sortByColumnHeader from './sortByColumnHeader';

describe('sortByColumnHeader', () => {
  it('sorts without mutating the original project list', () => {
    const projects: Project[] = [
      new Project({
        ProjectId: 2,
        Position: 'Beta',
        Website: 'beta.example.com',
        Address: 'Beta Street',
        Coordinates: [0, 2],
      }),
      new Project({
        ProjectId: 1,
        Position: 'Alpha',
        Website: 'alpha.example.com',
        Address: 'Alpha Street',
        Coordinates: [0, 1],
      }),
    ];

    const originalOrder = projects.map((project) => ({ ...project }));
    const sorted = sortByColumnHeader(projects, SortOrder.asc, 'ProjectId');

    expect(sorted.map((project) => project.ProjectId)).toEqual([1, 2]);
    expect(projects.map((project) => project.ProjectId)).toEqual(
      originalOrder.map((project) => project.ProjectId),
    );
  });
});
