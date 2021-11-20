# MyStockApp

Aplicação web desenvolvida para teste prático e aprofundamento de novos conhecimentos.

## Ferramentas utilizadas: 

- Microsoft Sql Server.
- Microsoft Visual Studio Community 2022 (back-end); 
- Microsoft Visual Code (front-end);

## Tecnologias utilizadas:

- Para o back-end foi utilizado .NET 5 (c#), recursos do Identity, como o Migrations e para a parte de banco, Sql Server Management Studio.
- Para o front-end, foi utilizado o Angular 11, fazendo o consumo da API desenvolvida, e demonstrando na tela para o usuário final, tendo as operações de CRUD disponíveis. A parte de CSS, foi feita utilizando Bootstrap.

## Orientações para rodar a aplicação localmente

- Instalar o [SqlServer](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads), eu utilizei o Management Studio.
- Instalar em seu computador o ASP .NET Core 3.1 RunTime, você pode baixar clicando [aqui](https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-aspnetcore-3.1.21-windows-hosting-bundle-installer).
- Ao instalar o Microsoft Visual Studio Community 2022, selecionar opção de download dos pacotes Web.
- Instalar o [Node.js](https://nodejs.org/en/download/) seguindo o passo a passo do executável.
- Instalar o Angular 11, inserindo o comando abaixo no cmd.
```
npm install -g @angular/cli@11.0.0
```
- No projeto MyStockWebAPI, trocar a connection string para a instância do seu servidor SQL Server, que fica no arquivo 'appsettings.json'.
- Com o projeto MyStockWebAPI aberto na IDE, rodar o comando do migration 'Add-Migration <nomeDaMigration>', e posterior 'Update-Database'.
  Esses comandos são responsáveis por criar o banco de dados e a tabela em seu banco.
- Rodar a aplicação MyStockWebAPI, com o comando 'dotnet run', ou pela interface do Visual Studio Community.
- Rodar a aplicação MyStockAppAngular, com o comando 'ng serve' pelo Visual Studio Code.
  
:exclamation:
> Lembre-se de trocar a connection string para a do seu banco local e realizar os comandos do migration.
