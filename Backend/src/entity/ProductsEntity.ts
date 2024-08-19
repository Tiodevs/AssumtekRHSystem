import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"products_table"})
export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    category: string

}
