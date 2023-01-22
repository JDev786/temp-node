
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
//console.log(names);
//console.log(data);
// require('./7-mind-grenade')

//===========================

// const http = require('http')

// const server = http.createServer((req,res)=>{
//   res.write('Welcome to our server')
//   res.end()
// })

// const http = require('http')

// const server = http.createServer((req,res)=>{

//   //res.write(`hey it's our homepage`)
// if(req.url === '/'){
//   res.end('Welcome to our home page')
// }
// if(req.url === '/about'){
//   res.end('our short history')
// }
//  res.end(`
//  <h1>oops</h1>
//  <p>we can't find page we are looking for</p>
//  <a href = "/"> back home</a>
//  `) 
// })
  
// server.listen(5000)

const _=require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems =_.flattenDeep(items)
console.log(newItems);