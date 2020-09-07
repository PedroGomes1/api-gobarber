import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UserController from '../controllers/UserController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticate from '../middleware/EnsureAuthenticated';

const userRouter = Router();
const upload = multer(uploadConfig);

const userController = new UserController();
const userAvatarController = new UserAvatarController();

userRouter.post('/', userController.create);

userRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userRouter;
