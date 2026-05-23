import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

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
  createOneProject(@Body() projectDTO: CreateProjectDto) {
    return this.projectsService.createOneProject(projectDTO);
  }
  @HttpCode(HttpStatus.OK)
  @Patch(':projectId')
  partialUpdateOneProject(
    @Param('projectId') projectId: string,
    @Body() updateProjectDTO: UpdateProjectDto,
  ) {
    return this.projectsService.updateOneProject(projectId, updateProjectDTO);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':projectId')
  removeOneProject() {
    return this.projectsService.removeOneProject();
  }
}
