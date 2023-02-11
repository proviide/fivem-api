/*
┌──────────────────────────────────────────┐
│       https://github.com/proviide        │
│           All rights reserved            │
└──────────────────────────────────────────┘*/

const { Server } = require("@proviide/fivem-api");
const server = new Server("IP:PORT");

async function getInfo() {
  server.getInfo().then(data => { console.log(data); });
  server.getPlayers().then(data => { console.log(data); });
}

getInfo();
