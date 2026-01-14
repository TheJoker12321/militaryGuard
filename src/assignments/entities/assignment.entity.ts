import { Column, ForeignKey, Table, Model } from "sequelize-typescript";
import { Shift } from "src/shifts/entities/shift.entity";
import { User } from "src/users/entities/user.entity";

@Table
export class Assignment extends Model {

    @ForeignKey(() => User)
    @Column
    userId: number

    @ForeignKey(() => Shift)
    @Column
    shiftId: number

}
