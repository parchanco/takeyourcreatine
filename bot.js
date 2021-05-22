const Twitter = require('twitter')
require('dotenv').config()

var T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var postMsg = () => {
  T.post('statuses/update', { status: "Take the creatine" }, function (err, data, response) {
    console.log(data)
  });
};

postMsg();

