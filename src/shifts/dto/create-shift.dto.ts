import { IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateShiftDto {

    @IsNotEmpty()
    @IsMilitaryTime()
    startTime: string

    @IsNotEmpty()
    @IsMilitaryTime()
    endTime: string

    @IsNotEmpty()
    @IsString()
    location: string

}
