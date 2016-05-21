// Require resource's model(s).
var TimeLapse = require("../models/time_lapse");

var index = function(req, res, next){
  TimeLapse.find({}, function(err, tLapses) {
    if (err) {
      res.json({message: err});
    } else {
      res.json({timeLapses: tLapses, msg: "You've hit the timelapse index."});
    }
  });
};

var show = function(req, res, next){
  TimeLapse.findById(req.params.id, function(err, timeLapse) {
    if (err) {
      res.json({message: 'Could not find timeLapse because ' + err});
    } else if (!timeLapse) {
      res.json({message: 'No timeLapse with this id.'});
    } else {
      res.json({timeLapse: timeLapse});
    }
  });
};

module.exports = {
  index: index,
  show:  show
};
