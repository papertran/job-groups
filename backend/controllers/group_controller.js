const user = require('../models/User');
const group = require('../models/Groups');

module.exports = {
    /*expects
	{
        email,
		groupName
	}
	*/
    // Creates a group and appends a user to it.
    createGroup(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;

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
    },

    // adds a user based on email, parameter is the same as above
    /*
        groupname: "This is the group for the person to be added"
        email: This is the person to be added
    */
    async addUser(req, res, next) {
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
};
