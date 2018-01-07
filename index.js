const googlehome = require ('google-home-notifier');
const cronJob    = require('cron').CronJob;
const moment     = require("moment");

// Setup Google Home
googlehome.device('Google Home', 'ja');

// Setup time signal
const cronTime = '50 59 6-23 * * *';

let job = new cronJob({
  cronTime: cronTime,
  start:    false,
  timeZone: 'Asia/Tokyo',

  onTick: function() {
    let text = moment().hours() + '時です。';
    googlehome.notify(text, function(res) {
      console.log(res);
    });
  },

  onComplete: function() {
    console.log('onComplete');
  }
})

job.start();
//job.stop();
