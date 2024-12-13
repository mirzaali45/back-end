import { Request, Response } from "express";
import fs from "fs";
import { IExpense } from "../types/expense";

export class UserController {
  getExpense(req: Request, res: Response) {
    let expense: IExpense[] = JSON.parse(
      fs.readFileSync("./db/expense.json", "utf8")
    )
    res.status(200).send({ expense });
  }
}
