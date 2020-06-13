## Aplicação "Ecoleta" desenvolvida na NLW (Next Level Week) da Rocketseat.

♻️Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

Exemplo prático de uma aplicação com back-end em NODE.js, com banco de dados SQLITE, front-end em REACT.js e mobile com REACT NATIVE. Em todos projetos foi utilizado o typescript. 

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- uma imagem do ponto de coleta
- nome da entidade, email e whatsapp
- e o endereço para que ele possa aparecer no mapa
- além de selecionar um ou mais ítens de coleta: 
  - lâmpadas
  - pilhas e baterias
  - papéis e papelão
  - resíduos eletrônicos
  - resíduos orgânicos
  - óleo de cozinha

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- navegar pelo mapa para ver as instituições cadastradas
- entrar em contato com a entidade através do E-mail ou do WhatsApp

Projeto desenvolvido durante a **NLW - Next Level Week** 

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]

## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

O projeto mobile necessita do expo instalado. 

É necessário alterar nos fontes o IP da maquina que hospeda o backend nos seguintes caminhos:

Server:
 src\ItemsControler e src\PointsControler

 Mobile:
 src\services

 Web(Front):
 src\services

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Crie o banco de dados e aliemnte a tabela Itens
$ npm run knex:migrate
$ npm run knex:seed

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# Vá para a pasta da aplicação Mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run android 
ou 
$ npm run ios