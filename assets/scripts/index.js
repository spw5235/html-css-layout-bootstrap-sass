'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

$('.dropdown').on('show.bs.dropdown', function () {
  console.log("works");
});
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
