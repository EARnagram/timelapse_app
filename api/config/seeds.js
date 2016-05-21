var mongoose = require('./database');

var TimeLapse = require('../models/time_lapse');

var timeLapses = [
  { // 0
    name: "Joshua Tree Nat'l Park",
    latlon: [170, -110],
    url: "https://media.giphy.com/media/OW4Uecmzzbzag/giphy.gif"
  },
  { // 1
    name: "Sequoia Nat'l Forest",
    latlon:   [121, -39],
    url: "https://67.media.tumblr.com/f8b00c35d5ac72f3d66a8682cb550443/tumblr_n4hgo8lbJv1tsao3uo1_500.gif"
  }
];

TimeLapse.remove({}, function(err) {
  if (err) console.log(err);
  TimeLapse.create(timeLapses, function(err, timeLapses) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + timeLapses.length  + " timeLapses.");
      mongoose.connection.close(function(err) {
        if (err) console.log(err);
        process.exit(0);
      });
    }
  });
});
