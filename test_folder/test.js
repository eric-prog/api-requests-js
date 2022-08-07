const request = require("api-request-js")

let data = request.getRequest("https://newton.now.sh/api/v2/factor/x^2-1")
request.log(data)
