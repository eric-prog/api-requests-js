# Welcome to the api-request-js package! 

## 🌐 Website 
https://requestjs.netlify.app/

### 😧 There's a problem...

Getting data from an API is complex and hard in JavaScript. A quick google search will direct you to a difficult code block that either use fetch or axios.<br>
This SCARES off beginners.<br>

- Which one do I use?
- Like what is the await keyword?
- When do I use it?
- But wait what is async?
- How does async even work?
- How do I error handle? .catch?
- I can't even download an image from this url!! Ahhrr!!!
- What's a Promise? Whaaa?!!??
- This totals over 30 lines of code (depending on your use case). Meanwhile in Python it's literally one line - requests.get(url).

With api-request-js we dumb down api calls. Now you can get data with just one line.

## 🚀 Install & Use!

```
npm i api-request-js
const request = require("api-request-js")
let data = request.getRequest(url, path)
request.log(data)
```

### 😧 Examples...

Solving math problems using the Newton Math Solver API:
```
const request = require("api-request-js")

let data = request.getRequest("https://newton.now.sh/api/v2/factor/x^2-1")
request.log(data)
```

Downloading Images from the Unsplash Image Generator API:
```
const request = require("api-request-js")
let data = request.getRequest("https://source.unsplash.com/random/", "/Users/Billy/Desktop/Images/")
```
