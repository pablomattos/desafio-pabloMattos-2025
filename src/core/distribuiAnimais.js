import { decideDono } from "../utils/regras.js";

export function distribuiAnimais(ordemAnimais, animais, p1, p2) {
  const resultado = [];
  const adotadosPorPessoa = { 1: 0, 2: 0 };

  for (let nomeAnimal of ordemAnimais) {
    const animal = animais[nomeAnimal];
    const favoritos = animal.brinquedos;

    const dono = decideDono(animal, favoritos, p1, p2, adotadosPorPessoa);
    resultado.push(`${nomeAnimal} - ${dono}`);
  }

  return resultado.sort();
}
