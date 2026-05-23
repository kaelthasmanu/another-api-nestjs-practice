import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @HttpCode(HttpStatus.OK)
  @Get()
  getManyProjects() {
    return 'This action returns all projects';
  }

  @HttpCode(HttpStatus.OK)
  @Get(':projetcId')
  getOneProject(): string {
    return 'This action returns one project';
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
