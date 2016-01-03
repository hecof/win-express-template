var Service = require('node-windows').Service;
var config = require('./config')

var svc = new Service({
    name: config.name,
    script: require('path').join(__dirname,'../bin/www')
});

svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

svc.uninstall();
