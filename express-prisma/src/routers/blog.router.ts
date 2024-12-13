import { Router } from "express";
import { BlogController } from "../controllers/blog.controller";

export class BlogRouter {
  private blogController: BlogController;
  private router: Router;

  constructor() {
    this.blogController = new BlogController();
    this.router = Router();
    this.initializeRouters();
  }

  private initializeRouters() {
    this.router.get("/", this.blogController.getBlog);
    this.router.get("/:slug", this.blogController.getBlogSlug);
  }

  getRouter() {
    return this.router;
  }
}
