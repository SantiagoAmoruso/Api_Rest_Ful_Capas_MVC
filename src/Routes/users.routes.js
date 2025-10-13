import { Router } from "express";

import pool from '../../config/conexion.js'

import { 
    getAllUesers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers } from "../Controllers/users.controller.js";
const router = Router()

router.get('/users', getAllUesers)

router.get('/users/:id', getUsersById)

router.post('/users/body', createUsers)

router.put('/users/:id', updateUsers)

router.delete('/users/:id', deleteUsers)

export default router;