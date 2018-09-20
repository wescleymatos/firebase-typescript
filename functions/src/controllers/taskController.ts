import {Request, Response} from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

export class TaskController {

  public index(req: Request, res: Response) {
    res.status(200).send({ message: 'GET task' });
  }

  public add(req: Request, res: Response) {
    const { server, service }: any = req.params;
    const docRef = firestore.collection('tasks').doc('teste');
    docRef.set({ server, service })
      .then(() => res.status(200).send({ message: 'GET task add ' + server }))
      .catch(() => res.status(400).send({ message: 'error' }));

    //res.status(200).send({ message: 'GET task add ' + server });
  }
}
