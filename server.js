var http, options, proxy, url;

http = require("http");

url = require("url");

proxy = url.parse('http://30rwirdvn11poq:vZ_PTOT3bWDNmDG9XR2nlWZe4A@us-east-static-03.quotaguard.com:9293');
target  = url.parse("http://ip.quotaguard.com/");

options = {
  hostname: proxy.hostname,
  port: proxy.port || 80,
  path: target.href,
  headers: {
    "Proxy-Authorization": "Basic " + (new Buffer(proxy.auth).toString("base64")),
    "Host" : target.hostname
  }
};

http.get(options, function(res) {
  res.pipe(process.stdout);
  return console.log("status code", res.statusCode);
});
