import { Router } from 'express';
import { Todo } from '../models/todo';
import { toASCII } from 'punycode';

let todos: Todo[] = [];
const router = Router();
type Requestbody={text:string};
type Requestparams={todoId:string};

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const body=req.body as Requestbody
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});

router.delete('/todo/:todoId', (req, res, next) => {
    const params=req.params as Requestparams
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'deleted todo', todos: todos });
});

export default router;
