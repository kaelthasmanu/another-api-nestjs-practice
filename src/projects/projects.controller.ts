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
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getManyProjects(): Project[] {
    return this.projectsService.getManyProjects();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':projectId')
  getOneProject(): Project {
    return this.projectsService.getManyProjects()[0];
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
