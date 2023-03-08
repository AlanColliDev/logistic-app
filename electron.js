const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
function createMainWindow() {

    mainWindow = new BrowserWindow({
        title: 'Test Dev',
		width: isDev ? 1000: 500,
		height: 800,
    });

    if(isDev)
        mainWindow.webContents.openDevTools();

    mainWindow.loadURL(isDev ? "http://localhost:3000": 
        `file://${path.join(__dirname, "../build/index.html")}`);

    mainWindow.on("closed", () => (mainWindow.destroy()));
}

app.on("ready", createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

/**Parece que solo macOs */
// app.on("activate", () => {
//     //controla la creaciopn de ventanas, cada que se hace clic en el escritorio
//     // if (BrowserWindow.getAllWindows() === 0) {
//         createMainWindow();
//     // }
// });