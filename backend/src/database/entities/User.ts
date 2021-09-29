import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  image: string;

  @Column("jsonb", { nullable: true })
  alreadyReadedBooks: string;

  @Column("jsonb", { nullable: true })
  currentReadingBooks: string;

  @Column("jsonb", { nullable: true })
  favoritesBooks: string;

  @Column("jsonb", { nullable: true })
  commentsAndEvaluations: string;

  @BeforeInsert()
  @BeforeUpdate()
  async passwordEnc() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
