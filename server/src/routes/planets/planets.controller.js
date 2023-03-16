const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets()); // important to "return"; function stops executing; we don't want to send response because you can only do it once
}

module.exports = {
  httpGetAllPlanets,
};
