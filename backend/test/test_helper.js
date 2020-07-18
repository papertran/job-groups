const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/job_groups_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

mongoose.connection
    .once('open', () => console.log('connected!'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });

beforeEach((done) => {
    const { users, groups } = mongoose.connection.collections;
    if (groups != undefined) {
        Promise.all(users.drop(), groups.drop())
            .then(() => done())
            .catch(() => done());
    } else {
        users
            .drop()
            .then(() => done())
            .catch(() => done());
    }
});
