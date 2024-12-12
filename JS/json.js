// JavaScript object Notation

const user = {id:12, name:'prince', age:28, designation:'project manager'}

// object to JSON string
const stringified = JSON.stringify(user);
console.log(stringified);

// jSON string to object

const jsonObject = JSON.parse(stringified);
console.log(jsonObject);