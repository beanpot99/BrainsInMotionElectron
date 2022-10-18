const {app, BrowserWindow,ipcMain,Notification} = require('electron');
//
const isDev= !app.isPackaged //if true, you are in production and if false you are in development
const path = require('path');
//const { electron } = require('process');


function createWindow(){
    const win =new BrowserWindow({
        width: 1600,
        height:1200,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecutionJavaScript: true,
            contextIsolation:true,
            preload:path.join(__dirname,'preload.js')
        },
    
    })
    win.loadFile('index.html')
    isDev && win.webContents.openDevTools();
}

//if we are in development environment we want to reload
if(isDev){
   require('electron-reload')(__dirname,{
    electron: path.join(__dirname, 'node_modules', '.bin','electron')
   })
}
app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message)=>{
    new Notification({title:'Notifitcation', body:message}).show();
})

//doesn't stop application when you x-out
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit;
    }
})
//underscore is setting parameter but not using it
//if no browser windows are open, reinitialize browser window. when trying to reactivate window aka you click on logo, it makes a new window
app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length ===0){
        createWindow();
    }
});

//when npm start is types, the main process is created 
//main.js file specified in package.json is executed
//native GUI is loaded
//browser window is generated via separate reenderer process
//on electron.js website htere are main process API methods 

//Webpack -> module builder to bundle js files for useage in the browser
//tells how to bundle the files into one or multiple files 

//Babel -> js skip compiler. compiles higher version of js into lower version