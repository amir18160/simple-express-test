import { Router } from "express";
import createError from "http-errors";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  throw new Error(
    createError(502, "required money! since you don't have any get over it!")
  );

  res.render("index", { title: "Express" });
});

export default router;
