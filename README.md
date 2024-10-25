# Room3 Web Final Project (HTML, CSS, JS)

## Descrição do Projeto

Este projeto faz parte do desenvolvimento de um site utilizando **HTML**, **CSS** e **JavaScript**. A estrutura do repositório segue um modelo de desenvolvimento colaborativo com as branchs `main` e `develop`, para garantir a estabilidade e o fluxo contínuo de integração.

## Estrutura de Branchs

- **main**: Esta é a branch de produção que contém código estável e pronto para ser implementado em produção. Só recebe merges da branch `develop` após revisão e testes completos.
- **develop**: Esta é a branch principal de desenvolvimento, onde todas as novas funcionalidades e correções de bugs são integradas e testadas antes de serem adicionadas na branch `main`.

## Como Iniciar

### 1. Clonar o repositório

Para começar a trabalhar no projeto, clona o repositório. De seguida, certifica-te de que estás a trabalhar na branch `develop`:

```
git clone https://github.com/ptfrodrigues/room3-web-final-project-html-css-js
cd room3-web-final-project-html-css-js
git checkout develop
```

### 2. Criar uma nova branch

Quando fores trabalhar numa nova funcionalidade ou correção de bug, deves sempre criar uma nova branch a partir de `develop`. Usa uma convenção clara e descritiva, como por exemplo:

feature/nome-da-funcionalidade: Para desenvolver novas funcionalidades. 
```
feature/ISSUE-101-galeria-imagens 
feature/ISSUE-102-pagina-blog 
feature/ISSUE-103-adicionar-botao-partilhar 
```

fix/nome-do-bug: Para correção de bugs encontrados no projeto.
```
fix/BUG-201-alinhamento-css
fix/BUG-202-texto-ultrapassa-container
fix/BUG-203-corrigir-menu-mobile
```

docs/nome-da-documentacao: Para alterações na documentação do projeto. 
```
docs/ISSUE-301-atualizar-readme
docs/ISSUE-302-adicionar-documentacao-api-js
```

improvement/nome-da-melhoria: Para melhorias no desempenho, estrutura, ou qualidade do código.
```
improvement/ISSUE-401-melhorar-performance-site
improvement/ISSUE-402-optimizar-imagens-carregamento
improvement/ISSUE-403-refinar-estrutura-html
```

hotfix/nome-do-hotfix: Para resolver problemas críticos e urgentes.
```
hotfix/BUG-501-corrigir-falha-critica
hotfix/BUG-502-resolver-problema-seguranca
```

test/nome-dos-testes: Para adicionar ou melhorar testes no projeto.
```
test/ISSUE-601-implementar-testes-unitarios-js
test/ISSUE-602-criar-testes-interface-formulario-contacto
```

chore/nome-da-tarefa: Para tarefas administrativas ou de manutenção do projeto.
```
chore/ISSUE-701-atualizar-dependencias
chore/ISSUE-702-configurar-linter
```

```
git checkout -b feature/ISSUE-XXX-nome-da-funcionalidade
```

### 3. Fazer alterações e commit

Depois de fazeres as alterações no teu código, adiciona os ficheiros modificados e faz o commit das tuas mudanças com uma mensagem clara e concisa.

```
git add .
git commit -m "feat: implementação da navbar"
```

### 4. Atualizar a branch `develop` e resolver conflitos

Antes de fazeres push, certifica-te de que a tua branch está atualizada com a última versão de `develop`:

```
git fetch origin
git checkout develop
git pull origin develop
git checkout feature/ISSUE-XXX-nome-da-funcionalidade
git rebase develop
```

### 5. Fazer push da branch

Depois de teres a certeza que a tua branch está atualizada e sem conflitos, faz o push das tuas alterações para o repositório remoto:

```
git push origin feature/ISSUE-XXX-nome-da-funcionalidade
```

### 6. Criar um Pull Request

1. Vai ao GitHub e abre um Pull Request (PR) da tua branch `feature/ISSUE-XXX-nome-da-funcionalidade` para `develop`.
2. Certifica-te de que incluis uma descrição clara das alterações e, se aplicável, uma referência ao issue correspondente (e.g., `Closes #123`).

Espera pela revisão e aprovação antes de fundir o PR.

## Explicação dos comandos git

1. Clona o repositório remoto do GitHub para o teu computador.
```
git clone https://github.com/ptfrodrigues/room3-web-final-project-html-css-js
``` 

2. Entra no diretório clone do projeto.
```
cd room3-web-final-project-html-css-js
``` 

3. Muda para a branch `develop`, onde o desenvolvimento de acontecer.
```
git checkout develop
``` 

4. Cria e muda para uma nova branch a partir de `develop`.
```
git checkout -b feature/ISSUE-XXX-nome-da-funcionalidade
``` 

5. Adiciona todas as alterações feitas ao "staging area", preparando-as para o commit.
```
git add .
``` 

6. Regista as alterações com uma mensagem concisa.
```
git commit -m "Message"
``` 

7. Vai buscar as últimas atualizações de todas as branchs do repositório remoto, sem integrá-las diretamente.
```
git fetch origin
```

8. Muda novamente para a branch `develop` para garantir que está atualizada antes de integrares a branch.
```
git checkout develop
``` 

9. Atualiza a branch `develop` local com as últimas alterações disponíveis no repositório remoto.
```
git pull origin develop
```

10. Volta para a tua branch.
```
git checkout feature/ISSUE-XXX-nome-da-funcionalidade
```

11. Aplica as alterações mais recentes de develop em cima da branch, para um histórico linear.
```
git rebase develop
```

12. Adiciona qualquer alteração feita durante a resolução de conflitos gerados pelo rebase.
```
git add .
```

13. Continua o processo de rebase depois de resolver os conflitos.
```
git rebase --continue
```

14. Envia a branch para o repositório no github para ser revista num Pull Request.
```
git push origin feature/ISSUE-XXX-nome-da-funcionalidade
```
