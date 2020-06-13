const url = require('url');

const myUrl = new URL('http://ilgssonbraga.com.br:3333/hello.html?id=1&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname); // dont show ports

// Path name
console.log(myUrl.pathname);

// Query params
console.log(myUrl.search);

// Query params object
console.log(myUrl.searchParams);

// Add query param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.search);

// Loop through params
myUrl.searchParams.forEach(value => console.log(value));