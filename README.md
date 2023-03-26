# Orcs-Cin-filos
Projeto de uma aplicação WEB para o bootcamp da orcestra

## Organização de requisitos:

Link do [trello](https://trello.com/invite/b/21ZSIqN9/ATTI968256b917649ed7d6d2eb7dae45eb01B9007E95/kanban-cinefilos):

## Organizações de Branches:

### Main:

- Branch principal que só recebe Pull Request da branch Homol.
- Todas as atualizações da Main vão definir as releases do projeto.

### Homol:

- Branch secundaria que só recebe Pull Request da branch Devel.
- Branch de teste da release antes de se passar para a Main.

### Devel:

- Branch principal com maior atualização do projeto.
- Branch base do projeto para o desenvolvimento.
- Branch Devel só recebe Pull Request das branches de cada requisito.

### branch de requisito:

- Ao trabalhar em determinado requisito, criasse uma branch a partir da branch devel.
- Padrão de escrita do nome da branch (RF01-Criar uma nova conta).