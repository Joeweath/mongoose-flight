import { Flight } from "../models/flight.js";

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add flight",
  });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights/");
  });
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      flights,
      title: "All Flights",
    });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
      title: "Flight Detail",
      flight: flight,
    });
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    res.redirect("/flights");
  });
}

export { newFlight as new, create, index, show, deleteFlight as delete };
