import { Post } from 'src/posts/entities/post.entity';
import { hash } from 'bcryptjs';
import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    Entity,
    OneToOne,
  } from 'typeorm';

@Entity('users')
export class User {

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

    @Column({ type: 'simple-array' })
    roles: string[];

    @Column({ type: 'bool', default: true })
    status: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
         return;
      }
      this.password = await hash(this.password, 10);
    }
}
