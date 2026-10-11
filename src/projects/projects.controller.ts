import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from "@nestjs/common";
import { ProjectsService } from "./projects.service.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { CreateProjectDto } from "./dto/create-project.dto.js";

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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }
}