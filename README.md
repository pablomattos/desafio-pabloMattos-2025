# 🐾 Desafio Abrigo Animais

## 🚀 Sistema de adoção e regras de distribuição de animais em abrigo

Este projeto tem como objetivo simular as regras de adoção de animais de um abrigo, respeitando preferências de brinquedos, restrições por espécie e regras de limite de adoção para cada pessoa.  

O sistema foi desenvolvido em **JavaScript (Node.js)**, com suporte a **ESM (ECMAScript Modules)** e **testes unitários em Jest**.

---

### 📋 Pré-requisitos

- Instalar Node.js  
  [Download Node.js](https://nodejs.org/en/download/prebuilt-installer/current)

---

### 🔧 Instalação

- **Passos:**
    * Copie a URL do repositório (HTTPS ou SSH).  
      Exemplo:  
      ```bash
      git clone https://github.com/pablomattos/desafio-pabloMattos-2025.git
      ```
    * Abra o terminal e acesse a pasta clonada:  
      ```bash
      cd abrigo-animais
      ```
    * Instale as dependências:  
      ```bash
      npm install
      ```

- **Rodar testes automatizados (Jest com suporte ESM):**
  ```bash
  npm test
  ```

---

### 📚 Funcionalidades do Sistema

#### 🐶 Classe principal
- **`AbrigoAnimais`**
  - Responsável por processar as entradas, validar os dados e distribuir os animais de acordo com as regras.

#### 📌 Método
- **`encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, listaAnimais)`**
  - Recebe as preferências de brinquedos de duas pessoas e a lista de animais disponíveis no abrigo.
  - Retorna:
    - `{ erro: "Mensagem de erro" }` caso exista inconsistência nas entradas.
    - `{ lista: ["Animal - destino", ...] }` com o resultado da distribuição.

#### 📋 Regras principais
- Cada pessoa pode adotar no máximo **3 animais**.
- **Gatos** não podem ir para pessoas que compartilham os mesmos brinquedos.
- **Jabuti (Loco)** pode ser adotado se houver companhia, mesmo que as regras de brinquedos não sejam respeitadas.
- Animais cujas regras não são atendidas permanecem no **abrigo**.

---

### 🧪 Exemplo de Uso
```js
import { AbrigoAnimais } from "./src/abrigo-animais.js";

const abrigo = new AbrigoAnimais();

const resultado = abrigo.encontraPessoas(
  "Rato,Bola",
  "Laser,Novelo",
  "Rex,Mimi,Fofo,Zero,Bola,Bebe,Loco"
);

console.log(resultado);
```

**Possível saída:**
```json
{
  "lista": [
    "Bebe - pessoa 2",
    "Bola - pessoa 1",
    "Fofo - abrigo",
    "Loco - pessoa 1",
    "Mimi - abrigo",
    "Rex - pessoa 1",
    "Zero - abrigo"
  ]
}
```

---

### ✅ Testes automatizados

Este projeto utiliza **Jest** para validar as regras de adoção.

#### Rodar todos os testes
```bash
npm test
```

#### Exemplo de saída esperada
```
 PASS  src/abrigo-animais.test.js
  Abrigo de Animais
    ✓ Deve rejeitar animal inválido (5 ms)
    ✓ Deve encontrar pessoa para um animal (2 ms)
    ✓ Deve encontrar pessoa para um animal intercalando brinquedos

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.987 s
```

---

### 🛠️ Construído com

- [Visual Studio Code](https://code.visualstudio.com/)  
- Tecnologias:  
  * [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
  * [Node.js](https://nodejs.org/)  
  * [Jest](https://jestjs.io/) para testes unitários

---

## ✒️ Autor

* **Pablo Moraes De Mattos** - [LinkedIn](https://www.linkedin.com/in/pablomoraesdemattos/)
