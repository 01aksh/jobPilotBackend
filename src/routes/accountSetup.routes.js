import express from "express";
import multer from "multer";
import path from "path";
import { createAccountSetup } from "../controllers/accountSetup.controller.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

const cpUpload = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "banner", maxCount: 1 },
]);

router.post("/employeeAccountSetup", cpUpload, createAccountSetup);

export default router;
