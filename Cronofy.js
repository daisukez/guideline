// https://app.cronofy.com/oauth/applications/589bf122f619c5205b000219
var cronofy = require('cronofy');
var options = {
  access_token: 'MWNz9rlkUwtoF5SP8_di39d3VJEiQ7zp',
  tzid: 'Asia/TOKYO'
};

cronofy.readEvents(options)
  .then(function (response) {
      var events = response.events;
  });
