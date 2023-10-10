import { Router } from "express";

const router = Router();

import { router as newsRouter } from "./router/news";
import { router as authRouter } from "./router/auth";
import passport from "passport";

router.use(
    "/api/newsposts",
    passport.authenticate("jwt", { session: false }),
    newsRouter
);
router.use("/api/auth", authRouter);

export { router };
