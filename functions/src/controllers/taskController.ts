import {Request, Response} from "express";

export class TaskController {
  public index (req: Request, res: Response) {
    res.status(200).send({ message: 'GET task' });
  }
}
