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

function edit(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/edit", {
      flight,
      err,
      title: "Edit Flight",
    });
  });
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, function (err, flight) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.ticket.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
};
