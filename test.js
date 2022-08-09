const WebSocket = require("ws");
const child_process = require("child_process");
const { port } = require("./config");

console.log("Spawning server process...");
const serverProcess = child_process.fork("./index.js");

serverProcess.on("spawn", () => {
    setTimeout(() => {
        const ws = new WebSocket(`ws://localhost:${port}`);

        ws.on("open", function open() {
            console.log("Connection successful!");
            process.exit(0);
        });
    }, 5000);
});