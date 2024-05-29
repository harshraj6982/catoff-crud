import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  constructor() {
    this.id = 0; // or any appropriate default value
    this.address = '';
    this.created_at = new Date();
    this.user = new User();
  }
}
