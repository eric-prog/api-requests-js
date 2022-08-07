const request = require("api-request-js")

let data = request.getRequest("https://source.unsplash.com/random/")
request.log(data)
