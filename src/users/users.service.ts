import { Injectable, Req, Res, NotFoundException, Inject } from '@nestjs/common';
import { AddSoldier } from './dto/addSoldier.dto';
import * as bcrypt from 'bcrypt'
import { User } from './entities/user.entity';
import { where } from 'sequelize';

@Injectable()
export class UsersService {
    
    constructor(@Inject('USER_REPOSITORY') private catsRepository: typeof User) {}

    async addSoldier(soldier : AddSoldier) {

        soldier.password = await bcrypt.hash(soldier.password, 10)
        await  this.catsRepository.create({...soldier})

        return "Soldier created successfuly"

    }

    async getSoldiers() {

        return await this.catsRepository.findAll<User>({ where: {roles: 'soldier'} })

    }

    async getCommanders() {

        return await this.catsRepository.findAll<User>({ where: {roles: 'commander'} })

    }

    async getByUsername(username: string) : Promise<User | null> {

            
        const findUser = await this.catsRepository.findOne<User>({where: {username : username}})

        if (!findUser) {

            throw new NotFoundException();
        
        }

        return findUser

    }

}
