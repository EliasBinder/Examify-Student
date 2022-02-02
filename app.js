const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const intercom = require('./intercom')

let win = null;

const createWindow = () => {
    win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile(path.join(__dirname, 'screens', 'overlay', 'overlay.html'))
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


for(let channelName of Object.keys(intercom.CHANNEL_LIST)){
    ipcMain.on(channelName, (evt, msg) => {
        let response = intercom.process(channelName, msg)
        if (typeof response !== 'undefined')
            win.webContents.send(channelName, response)
    })
}
