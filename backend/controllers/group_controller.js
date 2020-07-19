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

    addUser(req, res, next) {},
};
