import express from "express";
import petRouter from "../routes/PetRouter";
import adotanteRouter from "../routes/AdotanteRouter"

const router = (app: express.Router) => {
  app.use("/pets", petRouter);
  app.use("/adotantes", adotanteRouter)
};

export default router;
