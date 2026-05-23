import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { Project } from './entities/project.entity';

const mock = [
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

@Controller('projects')
export class ProjectsController {
  @HttpCode(HttpStatus.OK)
  @Get()
  getManyProjects(): Project[] {
    return mock;
  }

  @HttpCode(HttpStatus.OK)
  @Get(':projectId')
  getOneProject(): Project {
    return mock[0];
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createOneProject(): string {
    return 'This action creates a project';
  }
  @HttpCode(HttpStatus.OK)
  @Patch(':projectId')
  partialUpdateOneProject(): string {
    return 'This action updates a project';
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':projectId')
  removeOneProject(): string {
    return 'This action removes a project';
  }
}
