# Orcflix
Esse projeto é o desafio final feito durante o curso de capacitação em software realizado durante o processo Trainee da Orc'estra Gamificação.
Consiste um em site para a organização de filmes que satisfaz os [requisitos](https://hackmd.io/@lulugameplays/req-projetofinal#Requisitos-não-funcionais-restrições).

## Instruções para executar o projeto localmente
1. Certifique-se de ter instalado o [Node.js](https://nodejs.org/) (Versão 18).

2. No terminal navegue até o diretório raiz do projeto.

3. Execute o comando abaixo para instalar todas as dependências do projeto.
    ```
    npm install
    ```

4. Execute o comando abaixo para iniciar a aplicação e abri-la no navegador na porta padrão http://localhost:3000.
    ```
    npm run dev
    ```

## Instruções de organização para colaboradores:
O progresso será acompanhado pelo [trello](https://trello.com/invite/b/21ZSIqN9/ATTI968256b917649ed7d6d2eb7dae45eb01B9007E95/kanban-cinefilos), alternativavente pela aba de projetos do github (WIP) e pelos issues do github.

### Da organizaçãs de Branches:

**IMPORTANTE:** Não se coda em nenhuma das 3 primeiras branches descritas abaixo. 

Para desenvover uma feature/requisito, você deve:
1. Criar uma nova branch a partir da branch **devel**.
2. Certifique-se de estar na branch temporária que acabou de criar e faça suas alterações/commits nela.
3. Crie um  **Pull Request** da sua branch temporraria de requisitos para a branch Devel.

**Main:** É a branch principal do projeto e contém as versões estáveis do projeto. As atualizações da Main definem as releases do projeto.

**Homol:** É uma branch de teste usada para validar as alterações antes de serem mescladas na branch Main. Ela só recebe Pull Requests da branch Devel.

**Devel:** É a branch base para o desenvolvimento e recebe a maior frequência de atualizações do projeto. Ela só recebe Pull Requests das branches temporarias de requisito.

**Branch de requisito:** Cada requisito é desenvolvido em sua própria branch, criada a partir da branch Devel. Essas branches devem seguir o padrão de nomenclatura Ex: RF01-LoginScreen.