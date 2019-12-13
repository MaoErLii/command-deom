#!/usr/bin/env node
console.log('hello world');

const program = require('commander');

program
  .version('0.0.1')
  .option('-n, --name [name]', 'name')
  .option('-e, --email [email]', 'email')
  .parse(process.argv)

if(program.name) {
  console.log(`Hello, ${program.name}! (${program.email})  What's your problem?`)
}