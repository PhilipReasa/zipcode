// Dependency
var Retsly = require('retsly-js-sdk');

var retsly = new Retsly('gnPE7BHZtjfFcZ0IM8lP', '616a93d17169c0044e6b77a0081ee9bd');

retsly.ready(function(){
  // '/api/v1/<vendor>/<resource>.json'
  retsly.get('/api/v1/pub/listings.json', {limit: 10}, function(res){
    if (!res.success) throw new Error(res.bundle);
    console.log(res);
  });
});