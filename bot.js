const Twitter = require('twitter')
require('dotenv').config()

var T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

var postMsg = () => {
  T.post('statuses/update', { status: "Take the creatine" }, function (err, data, response) {
    console.log(data)
  });
};
console.log(postMsg)

setInterval(function () { postMsg(); }, 60000 * 60 * 24)

