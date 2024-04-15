import { Length } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql"; // Importez ObjectType
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() // Ajoutez ObjectType pour indiquer que c'est un type GraphQL
@Entity()
export class Country {
    @Field(() => ID) // Utilisez Field avec une fonction de retour
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ length: 50 })
    name: string

    @Field()
    @Column( {length: 4 })
    @Length(2, 4, { message: 'Code must be between 2 and 4 characters' }) // condition de validation ( class validator)
    code: string

    @Field()
    @Column({nullable: true})
    emoji: string



}

@InputType()
export class CreateCountryInput {
    @Field()
    name: string; 

    @Field()
    code: string;

    @Field()
    emoji?: string

}
