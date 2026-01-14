import { Inject, Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';
import { where } from 'sequelize';

@Injectable()
export class ShiftsService {

  constructor(@Inject('SHIFT_REPOSITORY') private shiftRepository: typeof Shift) {}

  async create(createShiftDto: CreateShiftDto) : Promise<object> {
    
    await this.shiftRepository.create({...createShiftDto})

    return {message: 'shift created successfuly'}

  }

  async findAll() : Promise<object | void> {

    return await this.shiftRepository.findAll<Shift>()
    
  }

  async findOne(id: number) : Promise<Shift | null> {
    
    return await this.shiftRepository.findOne<Shift>({where: {id : id}})
  
  }

  async update(id: number, updateShiftDto: UpdateShiftDto) : Promise<object | void> {
    
    await this.shiftRepository.update(updateShiftDto, {where: {id : id}})

    return {message: 'shift updated successfuly'}

  }

  async remove(id: number) : Promise<object | void> {
    
    await this.shiftRepository.destroy({ where: { id : id } })

    return {message: 'shift deleted successfuly'}

  }
}
