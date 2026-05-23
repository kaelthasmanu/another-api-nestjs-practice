import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';

const mock: Project[] = [
  {
    id: 1,
    key: 'project-1',
    title: 'Project 1',
    description: 'Description of project 1',
    plannedHours: new Date(),
    owner: { id: 1, name: 'Owner 1' },
  },
  {
    id: 2,
    key: 'project-2',
    title: 'Project 2',
    description: 'Description of project 2',
    plannedHours: new Date(),
    owner: { id: 2, name: 'Owner 2' },
  },
];

@Injectable()
export class ProjectsService {
  getManyProjects(): Project[] {
    return mock;
  }
}
