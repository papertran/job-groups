const user = require('../models/User');
const group = require('../models/Groups');
const { create } = require('../models/User');

module.exports = {
    /*expects
	{
        email,
        groupName,
        description
	}
    */

    async createGroup(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;
        const description = req.body.description;
        try {
            // Find the user, and check if the group exists
            const User = Promise.resolve(user.findOne({ email }));
            const Group = Promise.resolve(group.findOne({ name: groupName }));
            let [foundUser, checkGroup] = await Promise.all([User, Group]);

            if (checkGroup) {
                res.send({ error: 'Group name already exists!' });
                return;
            }

            const createGroup = await Promise.resolve(
                group.create({
                    name: groupName,
                    users: [foundUser],
                    description,
                })
            );

            foundUser.group.push(createGroup);
            foundUser.save().then(() => res.send({ group: createGroup }));
        } catch (err) {
            next;
            return;
        }
    },

    // adds a user based on email, parameter is the same as above
    /*
        groupname: "This is the group for the person to be added"
        email: This is the person to be added
    */
    async addUser(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

        try {
            const User = Promise.resolve(user.findOne({ email }));
            const Group = Promise.resolve(group.findOne({ name: groupName }));
            let [foundUser, foundGroup] = await Promise.all([User, Group]);

            // Check if both items are found
            if (foundUser == null) {
                res.send({ error: 'User not found!' });
                return;
            }
            if (foundGroup == null) {
                res.send({ error: 'User not found!' });
                return;
            }

            // Check if user already exists in the group
            for (let i = 0; i < foundUser.group.length; i++) {
                if (foundUser.group[i].equals(foundGroup._id)) {
                    res.send({ error: 'User already exists in group!' });
                    return;
                }
            }

            foundGroup.users.push(foundUser);
            foundUser.group.push(foundGroup);

            const saveGroup = Promise.resolve(foundGroup.save());
            const saveUser = Promise.resolve(foundUser.save());

            const [savedGroup, savedUser] = await Promise.all([
                saveGroup,
                saveUser,
            ]);
            console.log(savedGroup);
            res.send({ group: foundGroup });
        } catch (err) {
            next;
            return;
        }
    },

    /*
        groupname
        job: {
            name
            url
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
                .then((group) => res.send({ group }))
                .catch(next);
        });
    },
};
