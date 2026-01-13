import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AddSoldier } from './dto/addSoldier.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/Authorization/roles.decorator';
import { Role } from 'src/Authorization/roles.enum';
import { RolesGuard } from 'src/Authorization/roles.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly soldierService: UsersService){}

    @UseGuards(RolesGuard)
    @Post('soldier')
    @Roles(Role.Admin)
    
    async addSoldier(@Body(ValidationPipe) soldier : AddSoldier): Promise<{message: string}> {

        await this.soldierService.addSoldier(soldier)

        return {message: 'user created successfuly'}

    }

    @Get('soldier') 
    getSoldiers() : object[] {

       return this.soldierService.getSoldiers()

    }

    @Get('soldier/:username')
    getByUsername(@Param('username') username: string) : object | void {

        return this.soldierService.getByUsername(username)

    }

}
