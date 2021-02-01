const { expect } = require('chai');
const app = require('../src/app');

describe('Pet Routes', () => {
  it('GET responds 200 containing next pets in queue', () => {
    return supertest(app)
      .get('/api/pets')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.cat).to.be.an('object');
        expect(res.body.dog).to.be.an('object');
      });
  });
  it('DELETE dequeues selected pet type', () => {
    return supertest(app)
      .delete('/api/pets/cats')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.pet).to.be.an('object');
        expect(res.body.owner).to.be.a('string');
      });
  });
});
