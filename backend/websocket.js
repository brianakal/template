require('dotenv').config()

const WebSocket = require('ws');

const usePort = process.env.WS_PORT
const wss = new WebSocket.Server({
   port: process.env.WS_PORT|| 8008
})

console.log(`Websocket jalan pada port : ${usePort}`)
// console.log(`Websocket jalan pada port : 8008`)
wss.on('connection', ws => {
  ws.on('message', data => {

    console.log('incoming data', data)

    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);

      }
    })
  })
})



/* 
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8000 })

wss.on('connection', ws => {
  ws.on('message', data => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})
 */