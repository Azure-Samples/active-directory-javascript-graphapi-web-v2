---
services: active-directory
platforms: javascript
author: navyasric
---

# Sign in Azure AD + MSA Users using 3rd Party JavaScript OAuth Library (Hello.js)
| [Getting Started](https://apps.dev.microsoft.com/portal/register-app)| [Library](https://github.com/MrSwitch/hello.js) | [Docs](https://aka.ms/aadv2) | [Support](README.md#community-help-and-support)
| --- | --- | --- | --- |
> [!NOTE]
> This sample is using a 3rd party library that has been tested for compatibility in basic scenarios with the v2.0 endpoint.  Microsoft does not provide fixes for these libraries and has not done a review of these libraries.  Issues and feature requests should be directed to the library's open-source project.  Please see this [document](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-libraries) for more information.   
> 
>

This sample demonstrates how to use Azure AD with a 3rd party Javascript library ([hello.js](https://github.com/MrSwitch/hello.js)) to  do an OAuth 2.0 flow against the v2.0 endpoint.  Hello.js also provides code for calling web APIs which the sample has preconfigured to support the Microsoft Graph /me endpoint, and provides a structure for making MS Graph calls.  

## Register the application

Register your app with Azure AD v2.0 as follows:
1. Go to the [Microsoft Application Registration Portal](https://apps.dev.microsoft.com/portal/register-app) to register an application
2. Enter a name for your application
3. Make sure the option for Guided Setup is unchecked
4. Click `Add Platform`, then select `Web`
5. Add a Redirect URI of `http://localhost:8000/redirect.html`
6. Click Save 

## Build and Run the sample

1. Install hello.js.

  ```
  npm install -g bower
  bower install hello
  ```
  
2. Clone the code.
  ```
  git clone https://github.com/Azure-Samples/active-directory-javascript-graphapi-web-v2.git
  ```

3. Inside index.html, replace *``Register your app at apps.dev.microsoft.com``* with the **Application Id** from the application registered in the Microsoft Application Registration Portal

4. Run the web app on port 8000, and navigate to http://localhost:8000. If you have Python installed you can run a simple web server with the following command, 

  ```
  python -m SimpleHTTPServer 8000
  ```
You should be able to click on a login button to sign in with your AAD or MSA account. Once you sign in, the authentication response containing the requested token is displayed.

## Community Help and Support

Please file any questions or problems with the sample as [GitHub Issues](../../issues). You can also post on [Stack Overflow](http://stackoverflow.com/questions/tagged/azure-active-directory) with the tag [azure-active-directory]. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before.

For the OAuth2.0 library issues, please direct issues and feature requests to the library's open-source project.

This sample was tested with hello.js v1.16.1, Google Chrome version 64.0, and macOS 10.13.

## Acknowledgements

This sample was adapted from the [hello.js](https://github.com/MrSwitch/hello.js) templates. Thanks to [Brandon Werner](https://github.com/brandwe) for doing the initial testing and preparing much of the code. 


