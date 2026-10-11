import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service.js";

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
}