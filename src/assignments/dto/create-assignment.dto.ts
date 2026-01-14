import { IsInt, IsNotEmpty } from "class-validator"

export class CreateAssignmentDto {

    @IsNotEmpty()
    @IsInt()
    userId: number

    @IsNotEmpty()
    @IsInt()
    shiftId: number
    
}
