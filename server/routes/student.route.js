import { Router } from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
} from "../controllers/student.controller.js";
const router = Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);

export default router;
