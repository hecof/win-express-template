var path = require('path')
var Service = require('node-windows').Service
var config = require('./config')

var svc = new Service({
    name: config.name,
    description: config.description,
    script: path.join(__dirname,'../bin/www'),
    env: {
        name: "CONFIG",
        value: path.join(__dirname,'../config.json')
    }
});

svc.on('install',function(){
    svc.start()
});

svc.install()
