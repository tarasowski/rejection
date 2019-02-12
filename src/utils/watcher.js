// run node watch 
// file that monitors reducers/index.js file, rebuilds the files for testing and runs tests!
const exec = require('child_process').exec
const { Task } = require('ramda-x')
const path = require('path')
const fs = require('fs')

const reducers = path.resolve(__dirname, '../', 'reducers', 'index.js')

const watchFile = filepath => command =>
    Task((_, resolve) =>
        fs.watchFile(filepath, (eventType, filename) =>
            resolve(exec(command).stderr.pipe(process.stderr))))


watchFile(reducers)('npm test').fork(console.error, x => console.log('\x1b[32m%s\x1b[0m', 'reducers were updated!'))