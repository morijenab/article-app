const authentication = require('@feathersjs/authentication');
const oauth2 = require('@feathersjs/authentication-oauth2');
const googleTokenStategy = require('passport-google-plus-token').Strategy;
module.exports = function(app){
    const config = app.get('authentication');
    app.configure(authentication(config));
    app.configure(
        oauth2(Object.assign({
            Strategy: googleTokenStategy,
        },
        config.google
        )
    ));
    app.service('authentication').hooks({
        before:{
            create: [authentication.hooks.authentication(config.strategies)],
            remove: [authentication.hooks.authenticate('jwt')],
        },
    });
};