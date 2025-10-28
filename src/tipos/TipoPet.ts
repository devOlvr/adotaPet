import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
  id: number;
  nome: string;
  especie: EnumEspecie;
  adotado: string;
  dataDeNascimento: Date;
};

export default TipoPet;
