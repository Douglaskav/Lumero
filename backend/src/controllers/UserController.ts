import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class UserController {
  async create(req: Request, res: Response) {
    const userService = new UserService();
    const { username, email, password } = req.body;

    const user = await userService.create({username, email, password});

    return res.json(user);
  }
}

export { UserController };
