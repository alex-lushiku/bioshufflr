const fs = require('fs');
const shuffle_array = require('shuffle-array');
const Client = require('instagram-private-api').V1;
const config = require('./config.json');

const user = config['username'];
const device = new Client.Device(user);
const storage = new Client.CookieFileStorage(__dirname + '/cookies/' + user + '.json');

var content = config['content'];

if (config['shuffle']) shuffle_array(content);

// Sign In
Client.Session.create(device, storage, user, config['password'])
  .then(function (session) {
    var iterator = 0;

    setInterval(function () {
      Client.Account.editProfile(session, {
        first_name: config['name'],
        biography: config['prefix'] + content[iterator] + config['affix']
      });

      if (iterator < content.length-1) iterator++;
      else iterator = 0;
    }, config['interval'] * 3600000);
  });
