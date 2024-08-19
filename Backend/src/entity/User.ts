import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: false})
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false})
  email: string;
  
  @Column({ type: 'varchar', length: 100, nullable: false})
  senha: string;

  @Column({ type: 'varchar', length: 100, nullable: false})
  telephone: string;
  
  @Column({ type: 'varchar', length: 100, nullable: false})
  cpf: string;

  @Column({ type: 'varchar', length: 100, nullable: false})
  role: string;

  @Column({ type: 'varchar', length: 100, nullable: false})
  gender: string;

  @Column({ type: 'varchar', length: 100, nullable: false})
  adress: string;

  @Column({ type: 'boolean', nullable: false})
  userActive: Boolean;

}
