const { BrowserWindow, app } = require('electron')

const createWin = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
    })
    win.loadURL('http://127.0.0.1:5174/')
}

app.whenReady().then(() => {
    createWin()
})