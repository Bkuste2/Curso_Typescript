type objectType = {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
};

const object: objectType = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

object.chaveC = 'OI';
object.chaveD = 'teste';

console.log(object);
