# Room3 - Projeto de Site Responsivo

## Tabela de Conteúdos
- [Membros da Equipa](#grupo-3)
- [Escolha do Projeto](#escolha-do-projeto)
- [Descrição do Projeto](#descrição-do-projeto)
- [Metodologia do Projeto](#metodologia-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [URLs do Projeto](#urls-do-projeto)
- [Instruções para Contribuição](#instruções-para-contribuição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Práticas](#práticas)

## Grupo 3

O grupo é constiuído por Eduardo Marques, Felipe Mendonça, Pedro Rodrigues e Vanessa Souza

## Escolha do Projeto

Em conversa decidimos optar por um tema que nos tinha sido proposto pelo nosso formador de UML para o projeto desse módulo, que já tínhamos anteriormente ficado interessados em realizar.

## Descrição do Projeto

Este é o projeto Room3, um site responsivo que tem como objetivo mostrar as próximas peças de teatro que vão estrear. O site está dividido em diferentes páginas, desenvolvidas por uma equipa de quatro membros, cada um sendo responsável por uma secção específica do site. O objetivo é criar uma experiência coesa e uniforme para o utilizador, permitindo-lhe explorar facilmente as peças de teatro, efetuar pagamentos e obter informações adicionais sobre o projeto e os seus criadores.

## Metodologia do Projeto

A metodologia adotada pelo grupo foi inspirada em princípios da metodologia AGILE: dividimos o trabalho em tarefas menores e organizamos o projeto em fases curtas e interativas.

## Estrutura do Projeto

```
root/
|-- index.html
|-- assets/
|    |-- icons/
|    |-- styles/
|    |    |-- globals.css
|    |-- videos/
|    |-- images/
|-- js/
|-- pages/
|    |-- Eduardo/
|    |    |-- index.html
|    |    |-- styles.css
|    |-- Felipe/
|    |    |-- index.html
|    |    |-- styles.css
|    |-- Vanessa/
|    |    |-- index.html
|    |    |-- styles.css
|-- docs/
|-- README.md
```

- **index.html**: A homepage principal do site, que apresenta informações gerais e introdução.
- **assets/**: Diretório que contém recursos comuns a todas as páginas do projeto.
  - **styles/**: Contém o ficheiro CSS principal para estilos gerais do site.
  - **icons/**: Contém os icons utilizados no site.
  - **images/**: Contém imagens utilizadas no projeto.
  - **videos/**: Contém videos utilizados no projeto.
- **js/**: Contém os ficheiros JavaScript principais para funcionalidades do site.
- **pages/**: Diretório que contém as páginas individuais de cada membro da equipa.
  - **Eduardo/**: Contém a página de listagem das peças de teatro disponíveis para assistir.
  - **Vanessa/**: Contém a página de pagamento, onde os utilizadores podem efetuar pagamentos para assistir às peças.
  - **Filipe/**: Contém a página "Sobre" e a página de contacto, oferecendo informações adicionais sobre o projeto e a equipa.
- **docs/**: Diretório de documentação que contém o guia de ajuda para o desenvolvimento e colaboração no projeto.
  - **prototypes/**: Diretório que contém capturas de ecrã do projeto.
- **LICENSE**: Ficheiro de licença para o projeto.
- **README.md**: Ficheiro que contém a documentação principal do projeto.

## URLs do Projeto

Cada membro tem uma página específica que pode ser acedida diretamente pelo seguinte URL:
- Homepage (Pedro): `index.html`
- Página das Peças (Eduardo): `/pages/eduardo/index.html`
- Página de Pagamento (Vanessa): `/pages/vanessa/index.html`
- Sobre e Contacto (Felipe): `/pages/felipe/index.html`

## Instruções para Contribuição

1. **Clonar o Repositório**: Clone o repositório utilizando o comando:
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Criar uma Branch**: Crie uma nova branch para trabalhar nas suas alterações:
   ```bash
   git checkout -b nome-da-branch
   ```
3. **Fazer Commit das Alterações**: Assim que terminar as alterações, faça commit com uma mensagem clara:
   ```bash
   git commit -m "nome-da-branch: Mensagem descritiva do commit"
   ```
4. **Push e Pull Request**: Envie as alterações para o repositório e crie um Pull Request para revisão:
   ```bash
   git push origin nome-da-branch
   ```

### Exemplos de Branches
1. **Criar uma Nova Funcionalidade**
   - **Nome da Branch**: `feature/nova-funcionalidade`
   - **Comando Git**:
     ```bash
     git checkout -b feature/card
     ```

2. **Corrigir Bug na Página de Pagamento**
   - **Nome da Branch**: `fix/corrigir-bug-pagamento`
   - **Comando Git**:
     ```bash
     git checkout -b fix/padding-css
     ```

### Exemplo de Commit
Para um commit relacionado à adição de uma nova secção sobre os próximos eventos, poderia ser usado:
```bash
git commit -m "feature: adicionar secção de peças de teatro ao pages/nome-do-membro/index.html"
```

Para um commit que corrija uma propriedade CSS no contexto de uma branch de feature, poderias usar o seguinte:
```bash
Copy code
git commit -m "fix: corrigir a propriedade de margem em pages/nome-do-membro/styles.css na feature de peças de teatro"
```

## Tecnologias Utilizadas
- **HTML5**: Para a estrutura das páginas.
- **CSS3**: Para estilização.
- **Bootstrap**: Para componentes e estilos pré-definidos, facilitando a criação de um design uniforme e responsivo. [Consulta a documentação oficial do Bootstrap](https://getbootstrap.com/docs/).
- **JavaScript** (opcional para funcionalidades adicionais).

## Práticas
- **Commits Limpos e Concisos**: As mensagens de commit devem ser claras e informativas. Use um padrão que inclua o tipo de alteração, como "fix", "feat", "refactor". Exemplo:
  ```bash
  feat: adicionar nova secção sobre os próximos eventos ao index.html
  ```
- **Branches Estruturadas**: Mantenha um esquema de nomenclatura consistente para branches, como `feature/nome-da-feature`, `fix/descricao-do-fix`.