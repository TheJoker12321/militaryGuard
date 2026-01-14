import { IsString, IsInt, Max, Min, IsEmail, IsNotEmpty, IsEnum } from 'class-validator'
import { Role } from 'src/Authorization/roles.enum'


export class AddSoldier {


    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    name : String


    @IsNotEmpty()
    lastName : String


    @IsNotEmpty()
    @IsString()
    password: string

    
    @IsNotEmpty()
    @IsEmail()
    email : String


    @IsNotEmpty()
    militaryId: number

    
    @IsNotEmpty()
    tz : number


    @IsNotEmpty()
    @IsEnum(["soldier" , "commander"])
    roles:  Role[]

}