const { expect } = require('chai');
const app = require('../src/app');

describe('People Routes', () => {
  it('GET responds with 200 containing queue of people', () => {
    return supertest(app)
      .get('/api/people')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
      });
  });
  it('POST adds new person name to queue of people', () => {
    let test = { name: 'test' };
    return supertest(app)
      .post('/api/people')
      .expect(201)
      .send(test)
      .then((res) => {
        expect(res.body).to.be.a('string');
        expect(res.body).to.eql(test.name);
      });
  });
});
