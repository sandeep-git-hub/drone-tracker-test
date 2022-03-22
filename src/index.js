import express from "express";
import cors from "cors";
import { getPosition } from "./utils";

export const server = express();
server.use(express.json());
server.use(cors());
server.use((_, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

server.get("/drone-position", (req, res) => {
  const {
    query: { instruction },
  } = req;
  const currentPosition = getPosition(instruction);
  res.status(200).json({ currentPosition });
});
