---
services: active-directory
platforms: javascript
author: navyasric
---

# Sign in Azure AD + MSA Users using Javascript Open Source Library

> [!NOTE]
> This sample is using a 3rd party library that has been tested for compatibility in basic scenarios with the v2.0 endpoint.  Microsoft does not provide fixes for these libraries and has not done a review of these libraries.  Issues and feature requests should be directed to the library's open-source project.  Please see this [document](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-libraries) for more information.   
> 
>

This sample demonstrates how to use Azure AD with a 3rd party Javascript library ([hello.js](https://github.com/MrSwitch/hello.js)) to do oAuth 2.0 against the v2.0 endpoint.  hello.js also provides code for calling web API's which we have preconfigured to support the Microsoft Graph /me endpoint, and have created the structure for future MS Graph calls.  

## Steps to Run

1. Install hello.js.

  ```
  npm install -g bower
  bower install hello
  ```
  
2. Clone the code.
  ```
  git clone https://github.com/Azure-Samples/active-directory-javascript-graphapi-web-v2.git
  ```

3. Register your Azure AD v2.0 app. 
  - Go to the [Microsoft Application Registration Portal](https://apps.dev.microsoft.com/portal/register-app) to register an application
  - Enter a name for your application and your email
  - Make sure the option for Guided Setup is unchecked
  - Click `Add Platform`, then select `Web`
  - Add a Redirect URI of `http://localhost:8000/redirect.html`
  - Click Save 

4. Inside index.html, replace *``Register your app at apps.dev.microsoft.com``* with the **Application Id** from the application registered in the Microsoft Application Registration Portal

5. Run the web app for port 8000, and navigate to http://localhost:8000. If you have Python installed you can run the following command, 

  ```
  python -m SimpleHTTPServer 8000
  ```

## Questions and Issues

Please file any questions or problems with the sample as a github issue.  You can also post on StackOverflow with the tag ```azure-active-directory```.  For oAuth2.0 library issues, please see note above. 

This sample was tested with hello.js v1.13.5, Google Chrome version 55.0, and macOS 10.11.

## Acknowledgements

This sample was adapted from the hello.js templates.  Thanks to [Brandon Werner](https://github.com/brandwe) for doing the initial testing and preparing much of the code. 

[hello.js](https://github.com/MrSwitch/hello.js)
