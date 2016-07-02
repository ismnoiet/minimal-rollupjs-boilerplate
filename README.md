### Minimal Rollup.js boilerplate

*Source files should be placed under ``src`` and the bundle file is generated to ``dist/bundle.js``.*  
Before we start make sure you have [rollup.js](https://www.npmjs.com/package/rollup) installed globaly on your machine :   
```
$ npm install -g rollup
```

First, install Node dependencies:
```
$ npm install
```

Second, run the following command to bundle modules: 
```
rollup -c
```

Third, the output is converted from ES6 to ES5 using [buble](https://www.npmjs.com/package/buble),
if you don't want this just comment out the `` plugins:[buble()]`` line from ``rollup.config.js``.

