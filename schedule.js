var schedule = require("node-schedule");
var http = require("http");
var exec = require("child_process").exec;

const child = () =>
  exec("npm start", function(error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 2;
rule.hour = 22;
rule.minute = 0;
// rule.second = 30;

schedule.scheduleJob(rule, function() {
  child();
});

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
