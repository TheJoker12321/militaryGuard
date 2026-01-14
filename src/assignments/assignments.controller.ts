import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { AuthGuard } from 'src/authentiction/auth.guard';
import { Roles } from 'src/Authorization/roles.decorator';
import { Role } from 'src/Authorization/roles.enum';
import { RolesGuard } from 'src/Authorization/roles.guard';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}


  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentsService.create(createAssignmentDto);
  }

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.assignmentsService.findAll();
  }


  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentsService.findOne(+id);
  }



  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentsService.remove(+id);
  }
}
