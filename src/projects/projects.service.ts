import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

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
  removeOneProject() {
    throw new Error('Method not implemented.');
  }
  updateOneProject() {
    throw new Error('Method not implemented.');
  }
  createOneProject(projectDTO: CreateProjectDto): Project {
    const a = mock[0];
    return {
      ...a,
      ...projectDTO,
    };
  }
}
