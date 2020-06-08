# LAB - 09

<!-- ## Project: Project Name Here -->
## API Server

### Author: Abdallah Obaid

### Links and Resources

* [submission PR](https://github.com/Abdallah-401-advanced-javascript/auth-server/pull/1)
* [travis](https://github.com/Abdallah-401-advanced-javascript/auth-server/pull/1/checks?check_run_id=748237352)
* [ci/cd](https://github.com/Abdallah-401-advanced-javascript/auth-server/runs/748237605?check_suite_focus=true)
<!-- - [back-end server url](http://xyz.com) (when applicable) -->
<!-- * [front-end application](https://abdallah-lab-00.herokuapp.com/)  -->

### Documentation
<!-- * [jsdoc](https://abdallah-lab-00.herokuapp.com/docs/) -->
<!-- * [swagger](https://app.swaggerhub.com/apis/AbdallahObaid/class-06/0.1)  -->

### Modules
#### `basic-auth-midddleware.js` , `500.js`, `404.js`, `model.js`, , `user-model.js`,`timestamp.js`, `router.js`
##### Exported Values and Methods

###### `node index.js `
This will start listening.
###### `router`
This will send request to the user crud handler `users-model.js`
###### `users-model.js`
This will connect the main crud handler `model.js` with the products schema `users-schema.js`
###### `model.js`
This is the main crud handler.
###### `timestamp.js`
This Will log the date for the request to the terminal. 
###### `404.js`
This will console for not exist route.
###### `500.js`
This will console the server errors.
###### `basic-auth-midddleware.js`
This will authinticate the login process

### Setup

#### `.env` requirements 
const PORT = port || process.env.PORT || 3000;
MONGODB_URI=mongodb://localhost:27017/class-08-db;
SECRET=ysecrettokenkey

#### How to initialize/run your application 

* `npm init -y`
*  use git,postman or sawgger to use crud methods.

#### How to use your library (where applicable)
<!-- * use const lib=require('lib') -->
const basic = require(../'basic-auth-midddleware.js');
const Model = require('../model');
const productsRouter = require('../routes/products');
const categoriesRouter = require('../routes/categories');
const products = require('../models/products/products-model');
const categories = require('../models/categories/categories-model');
const err500 = require('../middleware/500.js');
const err404 = require('../middleware/404.js');

#### Tests

* Unit Tests: `npm test`
* Lint Tests: `npm run lint`

<!-- Incomplete Tests: -->

#### UML

![UML Diagram](whiteboardclass11.jpg)