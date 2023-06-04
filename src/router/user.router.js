import { Router } from "express";
import userController from '../controller/user.controller.js'

const router = Router()

router.get('/', userController.getUser);
router.post('/', userController.createUser) 
router.put('/:userId', userController.putUser);
router.delete('/:userId', userController.deleteUser) 
router.get('/:userId', userController.getUserById);

export default router;