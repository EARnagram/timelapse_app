var welcome = function(req, res, next) {
  res.json({msg: "welcome to API timelapse. Woop Woop! Family."});
};

module.exports = {
  welcome: welcome
};
