# node-conf.json
NodeJS package loading project configuration from conf.json

## Install

```sh
$ npm install conf-dot-json
```

## Usage
Put conf.json file to the root folder of your project with all environment configuration you need. 

```json
{
    "_comment": "conf.json example",
    "DB_OPTIONS":{
        "user": "user",
        "host": "db.server.com",
        "database": "dbase",
        "password": "secret"
    },
    ...
}
```

Then you can get confiiguration directly from the module object.
```js
// code example

const { DB_OPTIONS } = require( 'conf-dot-json' )

const dbConnection = new Pool( DB_OPTIONS )
```

The conf.json file will be read in a synchronous way only once during the first access to the configuration.


## License

Copyright (c) 2022 Igor Parchinsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.