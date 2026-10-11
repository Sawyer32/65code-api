import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service.js";
import { CreateContactDto } from "./dto/create-contact.dto.js";


@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateContactDto) {
    return this.prisma.contactSubmission.create({
      data: dto,
    });
  }
}