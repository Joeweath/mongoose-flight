import { Flight } from "../models/flight.js";

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  console.log("check check check crerate");
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/movies/new");
  });
}

function index(req, res) {
  console.log("sanity check");
}

export { newFlight as new, create, index };
