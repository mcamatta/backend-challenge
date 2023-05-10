import Router from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController();

router.get('/users', userController.users);
router.get('/users/:username/details', userController.details);
router.get('/users/:username/repos', userController.repos);

export default router;