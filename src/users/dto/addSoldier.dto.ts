import { IsString, IsInt, Max, Min, IsEmail, IsNotEmpty, IsEnum } from 'class-validator'
import { Role } from 'src/Authorization/roles.enum'


export class AddSoldier {

    @IsNotEmpty()
    @IsInt()
    id: number


    @IsNotEmpty()
    @IsInt()
    @Min(10000)
    @Max(10000000)
    personNumber: number 


    @IsNotEmpty()
    @IsString()
    username: string

    
    @IsNotEmpty()
    @IsString()
    password: string

    

    email: string


    @IsNotEmpty()
    @IsEnum(["soldier" , "commander"])
    roles:  Role[]

}