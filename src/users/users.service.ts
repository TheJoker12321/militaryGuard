import { Injectable, Req, Res, NotFoundException, Inject } from '@nestjs/common';
import { AddSoldier } from './dto/addSoldier.dto';
import * as bcrypt from 'bcrypt'
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
    
    constructor(@Inject('USER_REPOSITORY') private usersRepository: typeof User) {}

    async addSoldier(soldier : AddSoldier) {

        soldier.password = await bcrypt.hash(soldier.password, 10)
        console.log(soldier);
        
        await  this.usersRepository.create({...soldier})

        return "Soldier created successfuly"

    }

    async getSoldiers() {

        return await this.usersRepository.findAll<User>({ where: {roles: 'soldier'} })

    }

    async getCommanders() {

        return await this.usersRepository.findAll<User>({ where: {roles: 'commander'} })

    }

    async getByUsername(username: string) : Promise<User | null> {

            
        const findUser : User | null = await this.usersRepository.findOne<User>({where: {username : username}})

        if (!findUser) {

            throw new NotFoundException();
        
        }

        return findUser.dataValues

    }

    async getAll() : Promise<object | void> {

        return await this.usersRepository.findAll<User>()

    }

}
