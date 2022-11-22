
import { app, BrowserWindow, ipcMain } from 'electron'
import { exec } from "child_process";
import * as path from "path";

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow() {
    mainWindow = new BrowserWindow({
        // icon: path.join(assetsPath, 'assets', 'icon.png'),
        width: 1100,
        height: 700,
        backgroundColor: '#191622',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

async function registerListeners(file: void) {
    /**
     * This comes from bridge integration, check bridge.ts
     */
    // Исполняемый файл должен лежать в папке, с разницей в один уровень, относительно сборки майнкрайфта
    ipcMain.on('message', (_, message) => {
        console.log(message)
    })

    ipcMain.on("open-minecraft", (event, payload) => {
        const minecraftPath = path.resolve("./minecraft")
        // const cmd = "F: && cd F:\\pet\\minecraftlauncher\\minecraft && starter.bat";
        const cmd = `F: && cd ${minecraftPath} && starter.bat`;
        console.log("Minecraft is launched!")
        exec(cmd)
    })
}

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners)
    .catch(e => console.error(e))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


