import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  getManyProjects(): string {
    return 'This action returns all projects';
  }

  @Get(':projetcId')
  getOneProject(): string {
    return 'This action returns one project';
  }

  @Post()
  createOneProject(): string {
    return 'This action creates a project';
  }

  @Patch(':projectId')
  partialUpdateOneProject(): string {
    return 'This action updates a project';
  }

  @Delete(':projectId')
  removeOneProject(): string {
    return 'This action removes a project';
  }
}
