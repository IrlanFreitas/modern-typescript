import express, { Router } from "express";
import type { Request, Response } from "express";

const app = express();
const router = Router();

app.use(express.json());

router.get("/", (req: Request, res: Response) => {
  res.json({ message: 'Backend express'})
});

app.use(router)

app.listen(3002, () => 'server running on port: 3002')