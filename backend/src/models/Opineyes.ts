import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('opineyes')
export default class Opineyes {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  whatsapp: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}