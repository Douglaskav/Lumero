import { Entity, Column, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity({ name: "books" })
export class Book {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  booktitle: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  evaluations: string;

  @Column("jsonb")
  categories: string;

  @Column()
  pages: number;

  @Column()
  timeInSeconds: number;

  @Column()
  cover: string;

  @Column()
  audio: string;

  @Column()
  text: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
