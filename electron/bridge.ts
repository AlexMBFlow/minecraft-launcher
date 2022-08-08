import { contextBridge, ipcRenderer } from 'electron'

interface IApi {
  openMinecraft: () => void
  sendMessage: (message: string) => void
  on: (channel: string, callback: Function) => void
}

export const api: IApi = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sendMessage`
   */

  openMinecraft: (): void => {
    ipcRenderer.send("open-minecraft")
  },

  sendMessage: (message: string): void => {
    ipcRenderer.send('message', message)
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}


contextBridge.exposeInMainWorld('Main', api)
