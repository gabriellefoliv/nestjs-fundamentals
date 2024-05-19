import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(
    private MembersRepository: MembersRepository 
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.MembersRepository.create(name, memberFunction);

  }
}
