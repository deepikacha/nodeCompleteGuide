"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Use body parser middleware for parsing JSON
app.use(body_parser_1.default.json());
// Logger middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});
// Mount routes
app.use('/todos', todos_1.default);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
