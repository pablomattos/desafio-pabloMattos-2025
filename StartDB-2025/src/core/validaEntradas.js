// core/validaEntradas.js
export function validaEntradas(p1, p2, ordemAnimais, animaisValidos, brinquedosValidos) {
  if (!ordemAnimais || ordemAnimais.length === 0) {
    return { erro: "Animal inválido" };
  }

  for (const animal of ordemAnimais) {
    if (!animaisValidos.includes(animal)) {
      return { erro: "Animal inválido" };
    }
  }

  for (const brinquedo of [...p1, ...p2]) {
    if (!brinquedosValidos.includes(brinquedo)) {
      return { erro: "Brinquedo inválido" };
    }
  }

  return { erro: null };
}
