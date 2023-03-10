```
    ___________    __________  ___   ___    ____  ____
   / ____/  _/ |  / / ____/  |/  /  /   |  / __ \/  _/
  / /_   / / | | / / __/ / /|_/ /  / /| | / /_/ // /  
 / __/ _/ /  | |/ / /___/ /  / /  / ___ |/ ____// /   
/_/   /___/  |___/_____/_/  /_/  /_/  |_/_/   /___/  

```
[![NPM Downloads](https://img.shields.io/npm/dt/@proviide/fivem-api.svg?style=flat)](https://npmcharts.com/compare/@proviide/fivem-api?minimal=true)

A light-weight NodeJS package that interacts with the FiveM API to retrieve server information.

Quick Start - Node.js
-------------------------

Install:

```sh
npm install @proviide/fivem-api
```

Simple usage:
```js
const { Server } = require("@proviide/fivem-api");
const server = new Server("IP:PORT");

async function getInfo() {
  server.getInfo().then(data => { console.log(data); });
  server.getPlayers().then(data => { console.log(data); });
}

getInfo();
```

## Contributing

If you are interested in contributing to FiveM API, please feel free to submit a pull request on the [GitHub repository](https://github.com/proviide/fivem-api).
