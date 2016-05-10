var express = require('express');
var deeplink = require('node-deeplink')
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/deeplink', deeplink({
    fallback: 'https://cupsapp.com',
    android_package_name: 'com.citylifeapps.cups',
    ios_store_link: 'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4',
}));


app.listen(process.env.PORT || 3000, function(){
  console.log("Welcome to the machine");
});
