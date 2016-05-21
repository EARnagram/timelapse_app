var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var timeLapseSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  latlon:  {
             type:     [Number],
             required: true,
             index:    '2d'
           },
  url: String
});

var TimeLapse = mongoose.model('TimeLapse', timeLapseSchema);

module.exports = TimeLapse;
