"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express');
let router = Router();
router.post('/');
router.get('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
