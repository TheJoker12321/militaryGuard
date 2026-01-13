import { Table, Column, Model, Unique, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Unique
  @Column
  username: string;

  @Column
  name: number;

  @Column
  last_name: string;

  @Unique
  @Column
  email : string;

  @Column
  password : string;

  @Unique
  @Column
  tz : string;

  @Column
  military_id : string;

  @Column
  role : 'SOLDIER' | 'COMMANDER'
}