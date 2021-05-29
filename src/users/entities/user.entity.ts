import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    Entity,
    OneToOne,
  } from 'typeorm';

export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, default: '', nullable: true })
     name: string;

    @Column({ name: 'last_name', type: 'varchar', length: 255, default: '', nullable: true  })
    lastName: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 128, nullable: false, select: false })
    password: string;
}
