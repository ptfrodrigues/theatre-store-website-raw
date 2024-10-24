# Room3 Web Final Project (HTML, CSS, JS)

## Descrição do Projeto

Este projeto faz parte do desenvolvimento de um site utilizando **HTML**, **CSS** e **JavaScript**. A estrutura do repositório segue um modelo de desenvolvimento colaborativo com as branches `main` e `develop`, para garantir a estabilidade e o fluxo contínuo de integração.

## Estrutura de Branches

- **main**: Esta é a branch de produção que contém código estável e pronto para ser implementado em produção. Só recebe merges da branch `develop` após revisão e testes completos.
- **develop**: Esta é a branch principal de desenvolvimento, onde todas as novas funcionalidades e correções de bugs são integradas e testadas antes de serem fundidas na branch `main`.

## Como Iniciar

### 1. Clonar o repositório

Para começar a trabalhar no projeto, clona o repositório. De seguida, certifica-te de que estás a trabalhar na branch `develop`:

```
git clone https://github.com/ptfrodrigues/room3-web-final-project-html-css-js
cd room3-web-final-project-html-css-js
git checkout develop
```

### 2. Criar uma nova branch

Quando fores trabalhar numa nova funcionalidade ou correção de bug, deves sempre criar uma nova branch a partir de `develop`. Usa uma convenção clara e descritiva, como `feature/nome-da-funcionalidade` ou `fix/nome-do-bug`.

```
git checkout -b feature/nome-da-funcionalidade
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
git checkout feature/nome-da-funcionalidade
git rebase develop
```

### 5. Fazer push da branch

Depois de teres a certeza que a tua branch está atualizada e sem conflitos, faz o push das tuas alterações para o repositório remoto:

```
git push origin feature/nome-da-funcionalidade
```

### 6. Criar um Pull Request

1. Vai ao GitHub e abre um Pull Request (PR) da tua branch `feature/nome-da-funcionalidade` para `develop`.
2. Certifica-te de que incluis uma descrição clara das alterações e, se aplicável, uma referência ao issue correspondente (e.g., `Closes #123`).

Espera pela revisão e aprovação antes de fundir o PR.

## Explicação dos comandos git

1. ```
git clone https://github.com/ptfrodrigues/room3-web-final-project-html-css-js
``` 
> Clona o repositório remoto do GitHub para a tua máquina local.

2. ```
cd room3-web-final-project-html-css-js
``` 
> Entra no diretório do projeto clonado.

3. ```
git checkout develop
``` 
> Muda para a branch `develop`, onde o desenvolvimento ativo acontece.

4. ```
git checkout -b feature/feature
``` 
> Cria e muda para uma nova branch de funcionalidade a partir de `develop`.

5. ```
git add .
``` 
> Adiciona todas as alterações feitas ao "staging area", preparando-as para o commit.

6. ```
git commit -m "Message"
``` 
> Regista as alterações com uma mensagem clara e concisa.

7. ```
git fetch origin
```
> Vai buscar as últimas atualizações de todas as branches do repositório remoto, sem integrá-las diretamente.

8. ```
git checkout develop
``` 
> Muda novamente para a branch `develop` para garantir que está atualizada antes de integrares a tua branch de funcionalidade.

9. ```
git pull origin develop
```
> Atualiza a branch `develop` local com as últimas alterações disponíveis no repositório remoto.

10. ```
git checkout feature/feature
```
> Volta para a tua branch de funcionalidade.

11. ```
git rebase develop
```
> Aplica as alterações mais recentes de develop em cima da tua branch de funcionalidade, criando um histórico linear.

12. ```
git add .
```
> Adiciona qualquer alteração feita durante a resolução de conflitos gerados pelo rebase.

13. ```
git rebase --continue
```
> Continua o processo de rebase depois de resolver os conflitos.

14. ```
git push origin feature/feature
```
> Envia a tua branch de funcionalidade para o repositório remoto para ser revista num Pull Request.
