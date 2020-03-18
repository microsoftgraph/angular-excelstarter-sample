---
page_type: sample
products:
- office-excel
- office-onedrive
languages:
- typescript
description: "En este ejemplo se muestra cómo conectar una aplicación de Angular 4.0 a una cuenta profesional o educativa de Microsoft con la API de Microsoft Graph."
extensions:
  contentType: samples 
  technologies:
  - Mcirosoft Graph
  - Microsoft identity platform
  platforms:
  - AngularJS
  createdDate: 8/28/2017 3:55:43 PM
---
# Ejemplo de Microsoft Graph Excel Starter para Angular 4

## Tabla de contenido

* [Introducción](#introduction)
* [Requisitos previos](#prerequisites)
* [Registrar la aplicación](#register-the-application)
* [Compilar y ejecutar el ejemplo](#build-and-run-the-sample)
* [Preguntas y comentarios](#questions-and-comments)
* [Colaboradores](#contributing)
* [Recursos adicionales](#additional-resources)

## Introducción

Este ejemplo muestra cómo conectar una aplicación de Angular 4.0 a cuentas de Microsoft profesionales o educativas (Azure Active Directory) usando la [API de Microsoft Graph](https://developer.microsoft.com/en-us/graph/) con el [SDK de JavaScript de Microsoft Graph](https://github.com/microsoftgraph/msgraph-sdk-javascript) para obtener información sobre el usuario que ha iniciado sesión y cargar esa información en un archivo de Excel almacenado en OneDrive.

![imagen](https://user-images.githubusercontent.com/3375461/28985978-e5d3ea26-7919-11e7-8a69-a52bccd3f46b.png)

Una vez que autentique y autorice la aplicación, obtendrá el nombre y la dirección de correo electrónico del usuario que ha iniciado sesión.

![imagen](readme-images/Angular4ScreenShot.png)

Al hacer clic en el botón **Escribir en Excel**, la aplicación escribe la información del usuario en un archivo de Excel almacenado en la carpeta de OneDrive raíz del usuario.

![imagen](readme-images/ExcelScreenShot.png)

## Requisitos previos

Para usar este ejemplo, necesita lo siguiente:
* [Node.js](https://nodejs.org/). Node es necesario para ejecutar el ejemplo en un servidor de desarrollo y para instalar dependencias.
* [CLI de Angular](https://github.com/angular/angular-cli)
* Una [cuenta de Microsoft](https://www.outlook.com) o una [cuenta de Office 365 para empresas](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account)
* Cargue el archivo **demo.xlsx** en la raíz de este repositorio en la carpeta raíz de la cuenta de OneDrive. Este archivo contiene una tabla vacía con dos columnas.

## Registrar la aplicación

1. Inicie sesión en el [Portal de Azure: registro de aplicaciones](https://go.microsoft.com/fwlink/?linkid=2083908) con su cuenta personal, profesional o educativa.

2. Seleccione **Nuevo registro**.

3. En la sección **Nombre**, escriba un nombre significativo para la aplicación, que se mostrará a los usuarios de la aplicación.

1. En **Tipos de cuenta admitidos**, seleccione **Cuentas en cualquier directorio de organización y cuentas personales de Microsoft (por ejemplo, Skype, Xbox o Outlook.com).**  

1. Seleccione **Registrar** para crear la aplicación. 
	
   En la página de información general de la aplicación se muestran las propiedades de la aplicación.

4. Copie el **Id. de la aplicación (cliente)**. Este es el identificador único de la aplicación. 

5. En la lista de páginas de la aplicación, seleccione **Autenticación**.

6. En la sección **Redirigir URI**, elija **Web** en el menú desplegable **Tipo** y escriba *http://localhost:4200/* como la **URI de redirección**. 

1. En **Configuración avanzada**, habilite el flujo de concesiones implícitas marcando las casillas **Tokens de acceso** y **Tokens de ID.** 

8. Elija **Guardar**.

## Compilar y ejecutar el ejemplo

1. Con su IDE favorito, abra **configs.ts** en *src/app/shared*.

2. Reemplace el valor del marcador de posición **ENTER_YOUR_CLIENT_ID** con el ID. de aplicación de la aplicación de Azure registrada.

3. En un símbolo del sistema, ejecute el siguiente comando en el directorio raíz: `npm install`. De este forma, se instalan las dependencias del proyecto, incluida la biblioteca de autenticación del cliente [HelloJS](http://adodson.com/hello.js/) y el [SDK de JavaScript de Microsoft Graph](https://github.com/microsoftgraph/msgraph-sdk-javascript).
  
4. Ejecute `npm start` para iniciar el servidor de desarrollo.

5. Vaya a [http://localhost:4200/](http://localhost:4200/) en el explorador web.

6. Seleccione el botón **Iniciar sesión con su cuenta de Microsoft**.

7. Inicie sesión con su cuenta personal, profesional o educativa y conceda los permisos solicitados.

8. Haga clic en el botón **Escribir en Excel**. Compruebe que las filas se han agregado al archivo **demo.xslx** que cargó en la carpeta raíz de OneDrive.


## Colaborar

Si quiere hacer su aportación a este ejemplo, vea [CONTRIBUTING.MD](/CONTRIBUTING.md).

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.

## Preguntas y comentarios

Nos encantaría recibir sus comentarios sobre este ejemplo. Puede enviarnos sus preguntas y sugerencias a través de la sección [Problemas](https://github.com/microsoftgraph/angular-excelstarter-sample/issues) de este repositorio.

Las preguntas generales sobre el desarrollo de Microsoft Graph deben publicarse en [Stack Overflow](https://stackoverflow.com/questions/tagged/microsoftgraph). Asegúrese de que sus preguntas o comentarios se etiquetan con [microsoftgraph].
  
## Recursos adicionales

- [Otros ejemplos Connect de Microsoft Graph](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=-Connect)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/)

## Copyright
Copyright (c) 2017 Microsoft. Todos los derechos reservados.
