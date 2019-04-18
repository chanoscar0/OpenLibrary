const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });
  // and load the localhost server of the app.
  win.loadURL("http://localhost:1234/");
}
app.on("ready", createWindow);
