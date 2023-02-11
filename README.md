```
    ___________    __________  ___   ___    ____  ____
   / ____/  _/ |  / / ____/  |/  /  /   |  / __ \/  _/
  / /_   / / | | / / __/ / /|_/ /  / /| | / /_/ // /  
 / __/ _/ /  | |/ / /___/ /  / /  / ___ |/ ____// /   
/_/   /___/  |___/_____/_/  /_/  /_/  |_/_/   /___/  

```
A light-weight NodeJS package that interacts with the FiveM API to retrieve server information.

Quick Start - Node.js
-------------------------

Install:

```sh
npm install @proviide/fivem-api
```

Simple usage:
```js
const { Server } = require("../index.js");
const server = new Server("IP:PORT");

async function getInfo() {
  server.getInfo().then(data => { console.log(data); });
  server.getPlayers().then(data => { console.log(data); });
}

getInfo();
```
