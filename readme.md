# Nodejs env.

Managing environment variables can be a pain. Env helps make that better.

[![Build Status](https://scrutinizer-ci.com/g/npmatichs/env/badges/build.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/env/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/npmatichs/env/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/env/?branch=master)

# Install

SSH:
``` 
npm install git+ssh://git@github.com:npmatichs/env.git --save
```

HTTP:

```
npm install git+http://github.com/npmatichs/use.env --save
```

# How to use

Register all your namespaces in your entry application script (index.js):
```
let envJson = require('.env'); // create some .env.json and put there your enviroments key/value.

require('env/loader').setEnv(envJson);

let env = require('env');

env('SUPPORT_MAIL', 'support@gmail.com');
// the first argument it the search key, if this key does not exists, use the second argument as default. The second key is optional.

``` 