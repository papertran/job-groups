const user = require('../models/User');
const group = require('../models/Groups');

module.exports = {
    /*expects
	{
        email,
		groupName
	}
    */

    createGroup(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

        user.findOne({ email })
            .then((foundUser) => {
                group.findOne({ name: groupName }, (err, docs) => {
                    if (docs) {
                        res.send({ error: 'Group name already exists!' });
                        return;
                    }

                    group
                        .create({ name: groupName, users: [foundUser] })
                        .then((createdGroup) => {
                            foundUser.group.push(createdGroup);
                            foundUser.save();
                            res.send({ createGroup });
                        })
                        .catch(next);
                });
            })
            .catch(next);
    },

    // adds a user based on email, parameter is the same as above
    /*
        groupname: "This is the group for the person to be added"
        email: This is the person to be added
    */
    addUser(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

        user.findOne({ email })
            .then((foundUser) => {
                group.findOne({ name: groupName }, (err, foundGroup) => {
                    if (err) {
                        res.send({ error: 'Group does not exist' });
                        return;
                    }

                    foundGroup.users.push(foundUser);
                    foundUser.group.push(foundGroup);
                    foundGroup
                        .save()
                        .then(foundUser.save().then(res.send(foundUser)))
                        .catch(next);
                });
            })
            .catch(next);
    },

    /*
        groupname
        job: {
            name
            position
            location
            pay
            postDate: "Jan 1, 2020"
            endDate "June 1, 2020"
        }
    */
    addJob(req, res, next) {
        const groupName = req.body.groupName;
        const job = req.body.job;

        group.findOne({ name: groupName }, function (err, foundGroup) {
            if (err) next;
            foundGroup.jobs.push(job);
            foundGroup
                .save()
                .then(() => res.send({ jobs: foundGroup.jobs }))
                .catch(next);
        });
    },
};
