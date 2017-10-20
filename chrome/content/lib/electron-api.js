((module) => {
  const ipc = require('electron').ipcRenderer;

  ipc.on('show-about-dialog', () => $('#about').modal());

  ipc.on('start-send-data', (sender, data) => geierlein.startSendData(data.asTestcase));

  ipc.on('show-ustsvza', () => geierlein.showUStSvzA());

  ipc.on('reprint-protocol', (sender, data) => geierlein.showProtocol(data));

  // We're running in chrome context, no need for reverse proxying.
  geierlein.transfer = geierlein.transferDirect;
})(__tmpModule);