import { Controller, Post, Body } from "@nestjs/common";
import { ContactService } from "./contact.service.js";
import { CreateContactDto } from "./dto/create-contact.dto.js";


@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    await this.contactService.create(dto);
    return { success: true, message: 'Tack för ditt meddelande!'};
  }
}