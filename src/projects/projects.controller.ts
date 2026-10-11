import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ProjectsService } from "./projects.service.js";

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll() {
    return this.projectsService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const project = await this.projectsService.findBySlug(slug);
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return project;
  }
}