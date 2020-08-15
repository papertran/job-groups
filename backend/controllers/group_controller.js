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
    // Returns and updated user
    async createGroup(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;
        const description = req.body.description;
        try {
            // Find the user, and check if the group exists
            const foundUser = await user.findOne({ email }).exec();
            const foundGroup = await group.findOne({ name: groupName }).exec();

            if (foundUser === null) {
                res.send({ error: 'user does not exist!' });
                return;
            }

            if (foundGroup !== null) {
                res.send({ error: 'Group already exists!' });
                return;
            }

            // console.log(foundUser);

            const createGroup = await group.create({
                name: groupName,
                users: [foundUser],
                description,
            });

            const updatedUser = await user
                .findByIdAndUpdate(
                    foundUser._id,
                    {
                        $push: { group: createGroup },
                    },
                    { new: true }
                )
                .populate({
                    path: 'group',
                    populate: {
                        path: 'users',
                        model: 'user',
                    },
                })
                .exec();

            res.send({ data: updatedUser });
        } catch (err) {
            res.send({ error: err });
            return;
        }
    },

    // adds a user based on email, parameter is the same as above
    /*
        groupname: "This is the group for the person to be added"
        email: This is the person to be added
    */
    // returns an updated group
    async addUser(req, res, next) {
        const email = req.body.email;
        const groupName = req.body.groupName;
        try {
            const foundUser = await user.findOne({ email }).exec();
            const foundGroup = await group.findOne({ name: groupName }).exec();

            if (foundUser == null) {
                res.send({ error: 'User not found!' });
                return;
            }
            if (foundGroup == null) {
                res.send({ error: 'Group not found!' });
                return;
            }

            // Check if user already exists in the group
            for (let i = 0; i < foundUser.group.length; i++) {
                if (foundUser.group[i].equals(foundGroup._id)) {
                    res.send({ error: 'User already exists in group!' });
                    return;
                }
            }

            await user
                .findByIdAndUpdate(foundUser._id, {
                    $push: { group: foundGroup },
                })
                .exec();

            const updatedGroup = await group
                .findByIdAndUpdate(
                    foundGroup._id,
                    {
                        $push: { users: foundUser },
                    },
                    { new: true }
                )
                .populate('users')
                .exec();
            res.send({ data: updatedGroup });
        } catch (err) {
            res.send({ error: err });
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
    async addJob(req, res, next) {
        const groupName = req.body.groupName;
        const job = req.body.job;

        const updatedGroup = await group
            .findOneAndUpdate(
                { name: groupName },
                { $push: { jobs: job } },
                { new: true }
            )
            .populate('users')
            .exec();

        res.send({ data: updatedGroup });
    },
};
