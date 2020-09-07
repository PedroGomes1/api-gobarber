import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/EnsureAuthenticated';
import AppointmentController from '../controllers/AppointmentControllers';
import ProviderApppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();

const appointmentController = new AppointmentController();
const providerApppointmentsController = new ProviderApppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentController.create);
appointmentsRouter.get('/me', providerApppointmentsController.index);

export default appointmentsRouter;
