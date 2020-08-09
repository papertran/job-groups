const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .populate({
            path: 'group',
            populate: {
                path: 'users',
                model: 'user',
            },
        })
        .then((user) => {
            done(null, user);
        })
        .catch((e) => {
            new Error('failed to deserialize user');
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true,
        },

        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                googleId: profile.id,
            }).populate({
                path: 'group',
                populate: {
                    path: 'users',
                    model: 'user',
                },
            });

            if (existingUser) {
                return done(null, existingUser);
            }

            console.log(profile);
            const user = await new User({
                name: profile._json.name,
                email: profile._json.email,
                googleId: profile.id,
            }).save();
            done(null, user);
        }
    )
);
