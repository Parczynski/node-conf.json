const fs = require( 'fs' )
let rawdata = fs.readFileSync( 'conf.json' )
module.exports = JSON.parse( rawdata )