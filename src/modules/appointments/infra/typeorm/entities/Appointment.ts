import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

/*
Um para um -> OneToOne
Um para muitos -> OneToMany
Muitos para muitos -> ManyToOne
*/

// Por baixo dos panos o typescript já da um new nessa classe
// Quando coloco @entity, eu falo que tudo o que vem na classe vai por parâmetro pra ele, ele é uma função
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Esses @ é como vai salvar no banco
  @Column() // Quando coloco só column, por padrão ele já salva como varchar no banco
  provider_id: string;

  @ManyToOne(() => User) // Deve retornar o model que vai ser utilizado quando a variavel for chamada
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('timestamptz') // timestamp with time zone
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
