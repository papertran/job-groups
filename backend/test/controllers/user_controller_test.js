const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const user = mongoose.model('user');

describe('User controller', () => {
    it('Posts to /api/user and creates a new user', (done) => {
        user.countDocuments({ googleId: 'testgoogleId' }).then((count) => {
            request(app)
                .post('/api/user')
                .send({ name: 'user', googleId: 'testgoogleId' })
                .end(() => {
                    // console.log(count);
                    user.countDocuments({ googleId: 'testgoogleId' }).then(
                        (newCount) => {
                            // console.log(newCount);
                            assert(count + 1 === newCount);
                            done();
                        }
                    );
                });
        });
    });

    it('Sends a get request to /api/user  to see it exists', (done) => {
        const newUser = new user({ name: 'user', googleId: 'testgoogleId' });
        newUser.save().then(() => {
            request(app)
                .get('/api/user')
                .send({ name: 'user', googleId: 'testgoogleId' })
                .end((err, response) => {
                    assert(response.body.name === 'user');
                    assert(response.body.googleId === 'testgoogleId');
                    done();
                });
        });
    });
});
