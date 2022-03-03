import { Router } from "express";
const router = Router();
import * as flightsCtrl from "../controllers/flights.js";

/* GET users listing. */
// GET - localhost:3000/flights
router.get("/", flightsCtrl.index);
// GET - localhost:3000
router.get("/new", flightsCtrl.new);
router.get("/:id", flightsCtrl.show);
// GET - localhost:3000/flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit);

//POST - localhost:3000
router.post("/", flightsCtrl.create);
router.post("/:id/tickets", flightsCtrl.createTicket);
router.post("/:id/meals", flightsCtrl.addToMeal);

//DELETE - localhost:3000/flights/:id
router.delete("/:id", flightsCtrl.delete);

//PUT - localhost:3000/flights/:id
router.put("/:id", flightsCtrl.update);

export { router };
