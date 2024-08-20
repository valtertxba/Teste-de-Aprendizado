### Teste Técnico: Aplicação de Busca de Receitas

**Objetivo:**

Desenvolver uma aplicação web utilizando React e Next.js para consumir uma API externa de receitas (ex: TheMealDB, Spoonacular) e permitir ao usuário buscar receitas por diversos critérios.

**Funcionalidades:**

* **Busca de receitas:**
  * Campo de busca para inserir o nome da receita.
  * Botão para realizar a busca.
  * Exibição dos resultados da busca em uma lista de cards, contendo nome, imagem e um botão para visualizar os detalhes.
* **Detalhes da receita:**
  * Página dedicada para cada receita, exibindo informações como ingredientes, modo de preparo e imagem.
* **Componentes reutilizáveis:**
  * Criar componentes para:
    * Card de receita
    * Loading
    * Erro
* **Consumo de API:**
  * Utilizar o `fetch` ou uma biblioteca como `axios` para consumir a API de receitas.
  * Implementar a lógica para tratar os dados retornados pela API e exibir as informações na interface.
* **Gerenciamento de estado:**
  * Utilizar o hook `useState` para gerenciar o estado da aplicação (resultados da busca, receita selecionada).

**Tecnologias:**

* **Front-end:** React, Next.js, JavaScript (ES6+), CSS
* **API:** TheMealDB ([https://www.themealdb.com/](https://www.themealdb.com/)) ou Spoonacular ([https://spoonacular.com/](https://spoonacular.com/))

**Instruções para execução:**

1. **Faça um fork deste repositório:**
   * Acesse [https://github.com/LabsPlus/Teste-de-Aprendizado](https://github.com/LabsPlus/Teste-de-Aprendizado).
   * Clique no botão "Fork" no canto superior direito.
2. **Clone o seu fork:**
   ```bash
   git clone https://github.com/seu-usuario/Teste-de-Aprendizado.git
   ```
3. **Instale as dependências:**
   ```bash
   cd Teste-de-Aprendizado
   npx create-next-app@latest seu-nome
   ```
4. **Inicie o desenvolvimento:**
   ```bash
   npm run dev
   ```

**Commits:**

* **Organize seus commits:** Utilize mensagens claras e concisas para descrever as alterações em cada commit.
* **Commits frequentes:** Faça commits com frequência para manter um histórico de alterações bem organizado.
* **Ramos:** Utilize ramos para trabalhar em diferentes funcionalidades e evitar conflitos.


**Avaliação:**

* **Funcionalidade:** A aplicação deve atender a todos os requisitos descritos acima.
* **Qualidade do código:** O código deve ser bem estruturado, organizado e fácil de entender.
* **Reutilização de componentes:** A aplicação deve utilizar componentes reutilizáveis para facilitar a manutenção e a escalabilidade.
* **Gerenciamento de estado:** O estado da aplicação deve ser gerenciado de forma eficiente.
* **Consumo de API:** A integração com a API deve ser realizada de forma correta e eficiente.

**Observações:**

* Este projeto visa avaliar os conhecimentos em React, Next.js e desenvolvimento front-end em geral.
* Sinta-se à vontade para adicionar funcionalidades extras, como filtros por categoria, ordenação dos resultados, etc.
* Utilize boas práticas de desenvolvimento, como a utilização de hooks, componentes funcionais e CSS modular.

**Para ir além:**

* **Testes unitários:** Implementar testes unitários para garantir a qualidade do código.
* **Gerenciamento de rotas:** Explorar as diferentes opções de roteamento oferecidas pelo Next.js.
