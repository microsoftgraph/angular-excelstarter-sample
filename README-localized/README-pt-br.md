---
page_type: sample
products:
- office-excel
- office-onedrive
languages:
- typescript
description: "Este exemplo mostra como conectar um aplicativo angular 4.0 a uma conta corporativa ou de estudante Microsoft usando a API do Microsoft Graph."
extensions:
  contentType: samples 
  technologies:
  - Mcirosoft Graph
  - Microsoft identity platform
  platforms:
  - AngularJS
  createdDate: 8/28/2017 3:55:43 PM
---
# Exemplo do Excel Starter no Microsoft Graph para angular 4

## Sumário

* [Introdução](#introduction)
* [Pré-requisitos](#prerequisites)
* [Registrar o aplicativo](#register-the-application)
* [Criar e executar o exemplo](#build-and-run-the-sample)
* [Perguntas e comentários](#questions-and-comments)
* [Colaboração](#contributing)
* [Recursos adicionais](#additional-resources)

## Introdução

Este exemplo mostra como conectar um aplicativo angular 4.0 a uma conta corporativa ou de estudante da Microsoft (Azure Active Directory) usando a [API do Microsoft Graph](https://developer.microsoft.com/en-us/graph/) com o [SDK de JavaScript do Microsoft Graph](https://github.com/microsoftgraph/msgraph-sdk-javascript) para informações sobre o usuário conectado e carregar estas informações em um arquivo do Excel armazenado no OneDrive.

![imagem](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

Depois que você autenticar e autorizar o aplicativo, ele receberá o nome e o endereço de email do usuário que está conectado.

![imagem](readme-images/Angular4ScreenShot.png)

Quando você clica no botão **Gravar no Excel**, o aplicativo grava as informações do usuário em um arquivo do Excel armazenado na pasta raiz do OneDrive do usuário.

![imagem](readme-images/ExcelScreenShot.png)

## Pré-requisitos

Para usar este exemplo, você precisa do seguinte:
* [Node.js](https://nodejs.org/). É necessário ter um nó para executar o exemplo em um servidor de desenvolvimento e instalar as dependências.
* [CLI angular](https://github.com/angular/angular-cli)
* Uma [conta da Microsoft](https://www.outlook.com) ou [conta do Office 365 para empresas](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* Carregue o arquivo **demonstração.xlsx** na raiz deste repositório para a pasta raiz da sua conta do OneDrive. Este arquivo contém uma tabela vazia com duas colunas.

## Registrar o aplicativo

1. Entre no [Portal do Azure – Registros do Aplicativo](https://go.microsoft.com/fwlink/?linkid=2083908) usando sua conta pessoal, ou sua conta corporativa ou de estudante.

2. Escolha **Novo registro**.

3. Na seção **Nome**, insira um nome de aplicativo relevante que será exibido aos usuários do aplicativo

1. Na seção **Tipos de conta com suporte**, selecione **Contas em qualquer diretório organizacional e contas pessoais da Microsoft (por exemplo, Skype, Xbox, Outlook.com)**.  

1. Selecione **Registrar** para criar o aplicativo. 
	
   A página Visão geral do aplicativo mostra as propriedades do seu aplicativo.

4. Copie a **ID do aplicativo (cliente)**. Esse é o identificador exclusivo do aplicativo. 

5. Na lista de páginas para o aplicativo, selecione **Autenticação**.

6. Na seção **URIs de Redirecionamento**, escolha **Web** na lista suspensa **Tipo** e insira *http://localhost:4200/* como o **URI de Redirecionamento**. 

1. Em **Configurações Avançadas** habilitar o fluxo de concessão implícita, marque as caixas **Tokens de acesso** e **Tokens de ID** 

8. Escolha **Salvar**.

## Criar e executar o exemplo

1. Usando seu IDE favorito, abra **configs.ts** em *src/app/shared*.

2. Substitua o valor do espaço reservado **ENTER_YOUR_CLIENT_ID** pela ID do aplicativo de seu aplicativo do Azure registrado.

3. Em um prompt de comando, execute o seguinte comando no diretório raiz: `npm install`. Isso instala dependências do projeto, incluindo a biblioteca de autenticação do lado do cliente [HelloJS](http://adodson.com/hello.js/) e o [SDK de JavaScript do Microsoft Graph](https://github.com/microsoftgraph/msgraph-sdk-javascript).
  
4. Execute`npm start` para iniciar o servidor de desenvolvimento.

5. Navegue até [http://localhost:4200/](http://localhost:4200/) no navegador da Web.

6. Clique no botão **Entrar com sua conta Microsoft**.

7. Entre com sua conta pessoal, corporativa ou de estudante, e conceda as permissões solicitadas.

8. Clique no botão **Gravar no Excel**. Verifique se as linhas foram adicionadas ao arquivo **demo.xslx** que você carregou na pasta raiz do OneDrive.


## Colaboração

Se quiser contribuir para esse exemplo, confira [CONTRIBUTING.MD](/CONTRIBUTING.md).

Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).  Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

## Perguntas e comentários

Gostaríamos de saber sua opinião sobre este exemplo. Você pode enviar perguntas e sugestões na seção [Problemas](https://github.com/microsoftgraph/angular-excelstarter-sample/issues) deste repositório.

As perguntas sobre o desenvolvimento do Microsoft Graph em geral devem ser postadas no [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph). Não deixe de marcar as perguntas ou comentários com [microsoftgraph].
  
## Recursos adicionais

- [Outros exemplos de conexão usando o Microsoft Graph](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## Direitos autorais
Copyright (c) 2017 Microsoft. Todos os direitos reservados.
