import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

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
  updateOneProject(
    projectId: string,
    updateProjectDTO: UpdateProjectDto,
  ): Project {
    const project = mock.find((proj) => proj.id === parseInt(projectId, 10));
    if (!project) {
      throw new Error(`Project with id ${projectId} not found`);
    }

    return {
      ...project,
      ...updateProjectDTO,
      id: project.id,
    };
  }

  createOneProject(projectDTO: CreateProjectDto): Project {
    const a = mock[0];
    return {
      ...a,
      ...projectDTO,
    };
  }
}
