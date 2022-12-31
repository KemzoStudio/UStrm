require('v8-compile-cache');
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './src/preload.js')
        }
    });

    win.webContents.openDevTools();
    win.loadFile(path.join(__dirname, './src/pages/home.html'));  
};

app.whenReady().then(() => {

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

});

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit();
    }

});
  
