const mongoose = require('mongoose');
const Loc = mongoose.model('Location');


const locationsListByDistance = (req, res) => { };
const locationsCreate = (req, res) => { };
const locationsReadOne = (req, res) => { };
const locationsUpdateOne = (req, res) => { };
const locationsDeleteOne = (req, res) => { };


module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};