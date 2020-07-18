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
                .send({ name: 'Kevin Tran', googleId: 'testgoogleId' })
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
});
