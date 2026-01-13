import { Table, Column, Model, Unique, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    Id: number  

    @Unique
    @Column
    username: string;

    @Column
    name: string;

    @Column
    lastName: string;

    @Unique
    @Column
    email : string;

    @Column
    password : string;

    @Unique
    @Column
    tz : string;

    @Column
    militaryId : string;

    @Column
    roles : 'soldier' | 'commander'
}