const user = require('../models/User');
const group = require('../models/Groups');

module.exports = {
    /*expects
	{
		user: {
			// Info from user model
		}
		groupName
	}
	*/

    // Creates a group and appends a user to it.
    createGroup(req, res, next) {
        const userProps = req.body.user;
        const groupName = req.body.groupName;

        // Find user then create a group under that users info
        user.findOne(userProps).then((user) => {
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

    addUser(req, res, next) {},
};
