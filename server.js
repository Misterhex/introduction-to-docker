const http = require('http')
const port = 3000

var redis = require("redis"),
client = redis.createClient();

const requestHandler = (request, response) => {
  console.log(request.url)
  

  var info = JSON.stringify(client.server_info)

  response.end(info)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
