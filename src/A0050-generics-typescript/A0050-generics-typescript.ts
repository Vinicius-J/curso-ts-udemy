// Record
const objeto1: Record<string, string | number> = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - transforma tudo que era opcional em required
type PessoaRequired = Required<PessoaProtocol>;

// Partial - transforma tudo que era required em opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly - transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick - possibilita escolher quais chaves eu quero de um tipo
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaReadonly = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};
console.log(objeto2);

// Extract e Exclude
// Extract - pega todos os tipos que tem em ABC e CDE -> C
// Exclude - pega todos os tipos de ABC que NÃO estão em CDE -> A e B
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  sobrenome: string;
  idade: number;
};

// type AccountApi = {
//   id: string;
//   nome: string;
//   idade: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdadasdasdadadadasfsadfsad',
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
