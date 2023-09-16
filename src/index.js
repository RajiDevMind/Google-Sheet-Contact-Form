import express from "express";
import { z, ZodError } from "zod";

const app = express();

// Data schema validation with zod
const contactForm = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email(),
  message: z.string().min(4, { message: "message is required" }),
});

app.use(express.json());

app.post("/message", (req, res) => {
  try {
    const response = contactForm.parse(req.body);
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
