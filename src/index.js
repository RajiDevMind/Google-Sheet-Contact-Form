import express from "express";
import { z, ZodError } from "zod";

import accessGoogleSheets, { SHEET_ID } from "./contactSheet.js";

const app = express();

// Data schema validation with zod
const contactForm = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email(),
  message: z.string().min(4, { message: "message is required" }),
});

app.use(express.json());

app.post("/message", async (req, res) => {
  try {
    const response = contactForm.parse(req.body);
    await accessGoogleSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      // range: "Sheet1!A2:C2",
      range: "Sheet1!A2:C",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          ["suelhc", "hcgdjvf", "gibrish"],
          ["dude", "mentr", "modafucker"],
        ],
      },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ err: err.message });
    } else {
      res.status(400).json({ err });
    }
  }
});

const port = 4600;
app.listen(port, console.log(`Server is listening on port ${port}...`));
