import { Router } from "express";
import { UserController } from "../controllers/expense.controller";

export class ExepenseRouter {
  private router: Router;
  private expenseController: UserController;

  constructor() {
    this.expenseController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/", this.expenseController.getExpense); // Get all expenses
    // this.router.get("/:id", this.userController.getExpensesId); // Get expense by ID
    // this.router.post("/", this.userController.createExpense); // Create a new expense
    // this.router.put("/:id", this.userController.updateExpense); // Update an expense by ID
    // this.router.delete("/:id", this.userController.deleteExpense); // Delete an expense by ID
  }
  getRouter(): Router {
    return this.router;
  }
}
