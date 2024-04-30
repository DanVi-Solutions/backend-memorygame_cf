import { Router } from "express";
import cors from 'cors';
import swaggerRouter from "./swagger.route.cjs";
import userRouter from "./user.route.js";

const router = Router();

router.use("/user", cors(), userRouter);
router.use("/doc", cors(), swaggerRouter);

export default router;