import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AddSoldier } from './dto/addSoldier.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/Authorization/roles.decorator';
import { Role } from 'src/Authorization/roles.enum';
import { RolesGuard } from 'src/Authorization/roles.guard';
import { AuthGuard } from 'src/authentiction/auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly soldierService: UsersService){}

    @Post()
    async addSoldier(@Body(ValidationPipe) soldier : AddSoldier): Promise<{message: string}> {

        await this.soldierService.addSoldier(soldier)

        return {message: 'user created successfuly'}

    }


    @Roles(Role.Admin, Role.User)
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get('soldier') 
    async getSoldiers() : Promise<object[]> {

       return await this.soldierService.getSoldiers()

    }

    @Roles(Role.Admin, Role.User)
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get('soldier/:username')
    getByUsername(@Param('username') username: string) : object | void {

        return this.soldierService.getByUsername(username)

    }


    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get('commander')
    async getCommanders() : Promise<object[]> {

       return await this.soldierService.getCommanders()

    }

    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get()
    findAll() : object | void {

        return this.soldierService.getAll()
    
    }



}
