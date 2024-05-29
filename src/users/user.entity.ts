import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    this.id = 0; // or any appropriate default value
    this.name = '';
    this.email = '';
    this.created_at = new Date();
  }
}
