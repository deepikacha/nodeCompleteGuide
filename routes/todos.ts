import { Router } from 'express';
import { Todo } from '../models/todo';
import { toASCII } from 'punycode';

let todos: Todo[] = [];
const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});



export default router;
//