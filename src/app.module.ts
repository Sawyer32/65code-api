import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma.service.js';
import { ProjectsModule } from './projects/projects.module.js';
import { ContactModule } from './contact/contact.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ProjectsModule, ContactModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
