'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe('Server API', ()=> {
  it('should respond with 500', ()=> {   
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
    
  it('should respond 404 of an invalid route',() => {
    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });
    
  it('should respond properly /products', ()=> {
    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('it can get() products ', ()=> {
    let obj = {  'category': 'done',
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        // get all will return an array of all records
        return mockRequest.get('/api/v1/products')
          .then(result => {
            // console.log(result.body[0]);
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can post() a new products ', ()=> {
    let obj = {  'category': 'done',
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          // check data.body[key] if it matches obj[key]
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('TEST post() server failure ', ()=> {
    let obj = {name: 'test-post-1'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(500);
      });
  });

  it('TEST post() not found ', ()=> {
    let obj = {  'category': 'done',
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/products/notFound')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(404);
      });
  });


  





  it('should respond properly /api/v1/categories', ()=> {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('it can get() categories ', ()=> {
    let obj = {
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        // get all will return an array of all records
        return mockRequest.get('/api/v1/categories')
          .then(result => {
            // console.log(result.body[0]);
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can post() a new categories ', ()=> {
    let obj = {
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          // check data.body[key] if it matches obj[key]
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('TEST post() server failure ', ()=> {
    let obj = {name: 'test-post-1'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(500);
      });
  });

  it('TEST post() not found ', ()=> {
    let obj = {  'category': 'done',
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Best one in the neighbourhood'};
    return mockRequest
      .post('/api/v1/categories/notFound')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(404);
      });
  });  

        


});