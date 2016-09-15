# v2 JS App 

This is a small js app that uses the [hello.js](https://github.com/MrSwitch/hello.js/) to do oAuth2.0 against the v2 endpoint. 

## Authors

Brandon Werner ([brandwe@microsoft.com](mailto:brandwe@microsoft.com))

Daniel Dobalian ([dadobali@microsoft.com](mailto:dadobali@microsoft.com))

## Steps to Run

1. Register your app.
  1. Click "Add Platform" and select web. 
  2. Set the redirect uri to http://localhost:8000/redirect.html.
  
2. In your terminal:

'''
$ mkdir your_app
$ npm install -g bower
$ bower install hello
'''


3. Clone this repo into the directory you just created.

4. Inside index.html, set your applications id. 

5. Run the web app for port 8000, and navigate to http://localhost:8000. For example, 

'''
python -m SimpleHTTPServer 8000"
'''