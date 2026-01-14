import { Inject, Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from './entities/assignment.entity';

@Injectable()
export class AssignmentsService {

  constructor(@Inject('ASSIGNMENT_REPOSITORY') private assignmentRepository: typeof Assignment) {}

  async create(createAssignmentDto: CreateAssignmentDto) : Promise<object>{

    await this.assignmentRepository.create({...createAssignmentDto})

    return {message: 'assignment created successfully'}

  }

  async findAll() {
    
    return await this.assignmentRepository.findAll<Assignment>()

  }

  async findOne(id: number) {
    
    return await this.assignmentRepository.findOne({where: {id: id}})
  
  }

  async remove(id: number) {
    
    await this.assignmentRepository.destroy({where: {id :id}})

    return {message: 'deleted successfully'}
  }
}
