/*
┌──────────────────────────────────────────┐
│       https://github.com/proviide        │
│           All rights reserved            │
└──────────────────────────────────────────┘*/
const request = require("request");

class Server {
    constructor(server) {
        this.server = server;
    }

    getInfo() {
        return new Promise((resolve, reject) => {
            request(`http://${this.server}/info.json`, (error, response, body) => {
                if (error) { reject(error); return; } else { 
                    const information = JSON.parse(body);
                    resolve(information);
                }
            });
        });
    }

    getPlayers() {
        return new Promise((resolve, reject) => {
            request(`http://${this.server}/players.json`, (error, response, body) => {
                if (error) { reject(error); return; } else {
                    const players = JSON.parse(body);
                    const PlayerNames = players[0].name;
                    resolve(PlayerNames);
                }
            });
        });
    }
}

module.exports = { Server };