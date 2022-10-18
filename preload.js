const { ipcRenderer,contextBridge } = require('electron');

contextBridge.exposeInMainWorld('e_notification',{
    sendNotification(msg){
        ipcRenderer.send('notify', msg);
    }
})
//enotification is our api
//by denoting with e underscore it is clear you are getting that api from an electron environment
//bridges between preload.js and browser window
