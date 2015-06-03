# round-robin

Implementation of round-robin algorithm.


### Installation

```
$ npm install vdemedes/round-robin --save
```


### Usage

```javascript
const roundrobin = require('round-robin');

var servers = [
	'192.168.0.1',
	'192.168.0.2',
	'192.168.0.3'
];

var next = roundrobin(servers);

next(); // => '192.168.0.1'
next(); // => '192.168.0.2'
next(); // => '192.168.0.3'
next(); // => '192.168.0.1'
```


### Tests

```
$ make test
```


### License

round-robin is released under the MIT license.
