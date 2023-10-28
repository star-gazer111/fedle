const express = require('express');
const app = express();
const port = 6969;

var exec = require('child_process').exec;

exec('poetry run /bin/bash ./run.sh',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });