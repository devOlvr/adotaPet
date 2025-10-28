import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void | Promise<void>
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
  atualizaPet(
    id: number,
     pet: PetEntity
    ): Promise<{  success: Boolean, message?: String }>;
  deletaPet(id: number): Promise<{ success: Boolean, message?: String }> | void;
}
