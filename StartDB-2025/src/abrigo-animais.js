import { animais, brinquedosValidos } from "./data.js";
import { processaEntrada } from "./core/processaEntrada.js";
import { validaEntradas } from "./core/validaEntradas.js";
import { distribuiAnimais } from "./core/distribuiAnimais.js";

export class AbrigoAnimais {
  constructor() {
    this.animais = animais;
    this.animaisValidos = Object.keys(this.animais);
    this.brinquedosValidos = brinquedosValidos;
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, listaAnimais) {
    try {
      const { p1, p2, ordemAnimais } = processaEntrada(
        brinquedosPessoa1,
        brinquedosPessoa2,
        listaAnimais
      );

      const validacao = validaEntradas(
        p1,
        p2,
        ordemAnimais,
        this.animaisValidos,
        this.brinquedosValidos
      );
      if (validacao.erro) return { erro: validacao.erro };

      const lista = distribuiAnimais(ordemAnimais, this.animais, p1, p2);
      return { lista };
    } catch (e) {
      return { erro: "Erro inesperado" };
    }
  }
}
