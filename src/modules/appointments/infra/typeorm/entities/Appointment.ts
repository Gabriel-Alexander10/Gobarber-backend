import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
/*
 * Um para um (OneToOne) -> ex: um usuario tem um agendamento
 * Um para muitos (OneToMany) -> ex: um usuário tem muitos agendamentos
 * Muitos para muitos (ManyToMany) -> ex: Mais de um prestador pode participar do mesmo serviço
*/


// algo que vai ser salvo no banco de dados
@Entity('appointments') // classe é um parametro de entity
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
