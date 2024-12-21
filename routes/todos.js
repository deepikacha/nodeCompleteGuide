"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    // Get the todoId from the URL
    const updatedText = req.body.text;
    // Get the updated text from the request body
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        // Update the todo
        todos[todoIndex] = { id: todos[todoIndex].id, text: updatedText };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    // If the todo was not found,
    res.status(404).json({ message: 'Could not find todo with this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'deleted todo', todos: todos });
});
exports.default = router;
