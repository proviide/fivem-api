/*
┌──────────────────────────────────────────┐
│       https://github.com/proviide        │
│           All rights reserved            │
└──────────────────────────────────────────┘*/

const { Server } = require("@proviide/fivem-api");
const server = new Server("23.134.90.14:30120");

async function getInfo() {
  server.getInfo().then(data => { console.log(data); });
  server.getPlayers().then(data => { console.log(data); });
}

getInfo();