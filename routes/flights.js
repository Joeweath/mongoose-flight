import { Router } from "express";
const router = Router();
import * as flightsCtrl from "../controllers/flights.js";

/* GET users listing. */
// GET - localhost:3000/flights
router.get("/", flightsCtrl.index);
// GET - localhost:3000
router.get("/new", flightsCtrl.new);

//POST - localhost:3000
router.post("/", flightsCtrl.create);

export { router };
