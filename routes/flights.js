import { Router } from "express";
const router = Router();
import * as flightsCtrl from "../controllers/flights.js";

/* GET users listing. */
// GET - localhost:3000/flights
router.get("/", flightsCtrl.index);
// GET - localhost:3000
router.get("/new", flightsCtrl.new);
router.get("/:id", flightsCtrl.show);

//POST - localhost:3000
router.post("/", flightsCtrl.create);

//POST - localhost:3000/flights/:id
router.delete("/:id", flightsCtrl.delete);

export { router };
