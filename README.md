# Room3 Web Final Project (HTML, CSS, JS)

## Descrição do Projeto

Este projeto faz parte do desenvolvimento de um site utilizando **HTML**, **CSS** e **JavaScript**. A estrutura do repositório segue um modelo de desenvolvimento colaborativo com as branches `main` e `develop`, para garantir a estabilidade e o fluxo contínuo de integração.

## Estrutura de Branches

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

Sempre que trabalhares numa nova funcionalidade ou correção de bug, cria uma nova branch a partir da `develop`:

```
git checkout -b feature/ISSUE-XXX-nome-da-funcionalidade
```

Para mais detalhes sobre a convenção de nomeação de branches, consulta o [branch naming guide](docs/branch-naming-guide.md).

### 3. Fazer alterações e commit

Depois de fazeres as alterações no teu código, adiciona os ficheiros modificados e faz o commit das tuas mudanças com uma mensagem clara, concisa e #XXX número do ISSUE.

```
git add .
git commit -m "feature: implementação nome-da-funcionalidade #XXX"
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

## Explicação dos comandos Git

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
git commit -m "feat: implementação da navbar #101"
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
