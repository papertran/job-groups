const user = require('../models/User');
const group = require('../models/Groups');

module.exports = {
    /*expects
	{
        email,
		groupName
	}
    */

    // TODO FIX the updates, these are not correct, it needs to find then update
    // Creates a group and appends a user to it.
    createGroup(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

        group.findOne({ name: groupName }, (err, docs) => {
            if (docs) {
                res.send({ error: 'Group name already exists!' });
            } else {
                // Find user then create a group under that users info
                user.findOne({ email }).then((user) => {
                    group
                        .create({ name: groupName, users: [user] })
                        .then(
                            // After creating the group, add the group to the user that created it
                            (group) => {
                                user.updateOne({
                                    group: [...user.group, group],
                                }).then(() => res.send(group));
                            }
                        )
                        .catch(next);
                });
            }
        });
    },

    // adds a user based on email, parameter is the same as above
    /*
        groupname: "This is the group for the person to be added"
        email: This is the person to be added
    */
    addUser(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

        group
            .findOne({ name: groupName })
            .then((group) => {
                user.findOne({ email }).then((user) => {
                    group.updateOne({ users: [...group.users, user] });
                    user.updateOne({
                        group: [...user.group, group],
                    })
                        .then((result) => res.send(result))
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

        group
            .findOne({ name: groupName })
            .then((foundGroup) => {
                foundGroup.update();
            })
            .catch(next);
    },
};
