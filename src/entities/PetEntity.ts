import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import EnumPorte from "../enum/EnumPorte";
import AdotanteEntity from "./AdotanteEntity";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column({ nullable: true })
  porte?: EnumPorte
  @Column()
  dataDeNascimento: Date;
  @Column()
  adotado: Boolean;
  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
  adotante!: AdotanteEntity

  constructor(
    nome: string,
    especie: EnumEspecie,
    dataDeNascimento: Date,
    adotado: Boolean,
    porte?: EnumPorte
  ) {
    this.nome = nome;
    this.especie = especie;
    this.porte = porte
    this.dataDeNascimento = dataDeNascimento;
    this.adotado = adotado;
  }
}
