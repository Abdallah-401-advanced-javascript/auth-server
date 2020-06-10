'use strict';
require('dotenv').config();
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET; // place this in your .env
console.log('token',SECRET);
const mongoDB = require('./models/users/users-model');
// let obj={}; //db
let users = {}; //exporting

// TODO For lab 11 : read this link : https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
// 1- schema.methods.authenticateBasic .. follow the demo logic.

// save the password as hashed.
// 2- Mongoose : hooks pre hook. : https://mongoosejs.com/docs/middleware.html#pre

/**
 * @param(obj)
 */
users.save = async function(record){
  let reading = await mongoDB.read(record.username);
  if (!reading[0]) {
    record.password  = await bcrypt.hash(record.password, 5);
    await mongoDB.create(record);
    return record;
  }
  // let addNewNote =await mongoDB.create(record);
  return Promise.reject();
};

/**
 * @param(string)
 */
// compare the password with the encrypted one
users.authenticateBasic = async function(username, password) {
  // let reading = await mongoDB.read(record.username);
  // console.log(password)
  console.log('testotestotestotestotestotestotestotestotestotesto',username);
  let reading = await mongoDB.read(username);
  console.log('testotestotestotestotestotestotestotestotestotesto',reading[0]);
  console.log('testotestotestotestotestotestotestotestotestotesto',reading[0].password);
  // console.log('hello');
  let valid = await bcrypt.compare(password, reading[0].password);
  console.log(valid);
  return valid ? username : Promise.reject();
};

/**
 * @param(obj)
 */
users.generateToken = function (user) {
  console.log('TokengenerateTokengenerateTokengenerate',user);
  let token = jwt.sign({username: user}, SECRET,{expiresIn:900} );
  console.log('tokentokentokentokentoken',token);
  return token;
};
users.list = async function(record){
  let reading = await mongoDB.read(record);
  
  return reading;
};

users.verifyToken = function (token) {
  console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',token);
  return  jwt.verify(token, SECRET,async function(err, decoded){
    if (err) {
      console.log('err>>> ', err);
      return Promise.reject(err);
    }
    
    console.log('decoded >>>> ',decoded); // {username: usernameValue, ...}
    console.log('decoded >>>> ',decoded.username); // {username: usernameValue, ...}
    let username = decoded['username']; // decoded.username
    console.log('@@@@@@@@@@@sdfdsfdsafafs@@@@@@@@@',username);

    let reading = await mongoDB.read(username);
    console.log('');
    console.log(reading);
    if (reading[0]) {
      return Promise.resolve(decoded);
    } 
    return Promise.reject();
  });
};


module.exports = users;


