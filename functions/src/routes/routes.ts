import { TaskController } from '../controllers/taskController';

export class Routes {

  private taskController: TaskController = new TaskController();

  public routes(app): void {
    app.route('/').get(this.taskController.index);
    app.route('/add/').get(this.taskController.add);
  }
}
