import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service.js";
import { CreateProjectDto } from "./dto/create-project.dto.js";

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.project.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    })
  }

  async findBySlug(slug: string) {
    return this.prisma.project.findUnique({
      where: { slug },
    });
  }

  async create(dto: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        description: dto.description,
        imageUrl: dto.imageUrl,
        published: dto.published ?? true,
      }
    })
  }
}