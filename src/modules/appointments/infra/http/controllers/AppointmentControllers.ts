import { Request, Response } from 'express';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date); // Isso é uma transformação de dados, tranformo o date em objeto date javascript

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      user_id,
      provider_id,
    });

    return response.json(appointment);
  }
}
