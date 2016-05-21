var _ = require('lodash');

var localEnvVars = {
  TITLE:      'timelapse_app',
  SAFE_TITLE: 'timelapse_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
