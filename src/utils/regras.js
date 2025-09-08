export function decideDono(animal, favoritos, p1, p2, adotadosPorPessoa) {
  const podePessoa1 = contemOrdem(p1, favoritos);
  const podePessoa2 = contemOrdem(p2, favoritos);

  if (animal.tipo === "gato" && podePessoa1 && podePessoa2) {
    return "abrigo";
  }

  if (podePessoa1 && podePessoa2) {
    return "abrigo";
  }

  if (podePessoa1 && adotadosPorPessoa[1] < 3) {
    adotadosPorPessoa[1]++;
    return "pessoa 1";
  }
 
  if (podePessoa2 && adotadosPorPessoa[2] < 3) {
    adotadosPorPessoa[2]++;
    return "pessoa 2";
  }

  if (animal.tipo === "jabuti") {
    const temCompanhia = adotadosPorPessoa[1] > 0 || adotadosPorPessoa[2] > 0;
    if (temCompanhia) {
      if (adotadosPorPessoa[1] < 3) {
        adotadosPorPessoa[1]++;
        return "pessoa 1";
      } else if (adotadosPorPessoa[2] < 3) {
        adotadosPorPessoa[2]++;
        return "pessoa 2";
      }
    }
  }

  return "abrigo";
}

function contemOrdem(lista, favoritos) {
  if (!favoritos.length) return true;
  let i = 0;
  for (let item of lista) {
    if (item === favoritos[i]) {
      i++;
      if (i === favoritos.length) return true;
    }
  }
  return false;
}
