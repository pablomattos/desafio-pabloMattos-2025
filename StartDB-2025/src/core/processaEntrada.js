export function processaEntrada(brinquedosPessoa1, brinquedosPessoa2, listaAnimais) {
  const p1 = brinquedosPessoa1.split(",").map(s => s.trim().toUpperCase());
  const p2 = brinquedosPessoa2.split(",").map(s => s.trim().toUpperCase());
  const ordemAnimais = listaAnimais.split(",").map(s => s.trim());
  return { p1, p2, ordemAnimais };
}
