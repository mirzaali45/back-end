import express, { Request, Response, Application } from "express";
import cors from "cors"
import { ExepenseRouter } from "./routes/expense.router";

const PORT: number = 8000
const app: Application = express()
app.use(cors())
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my expense api")
})

const expenseRouter = new ExepenseRouter();

app.use("/api/expense", expenseRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});