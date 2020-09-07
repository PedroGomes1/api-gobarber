import { Request, Response } from 'express';
import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';

import { container } from 'tsyringe';

export default class AppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listProviderAppointment = container.resolve(
      ListProviderAppointmentService,
    );

    const appointments = await listProviderAppointment.execute({
      day,
      month,
      year,
      provider_id,
    });

    return response.json(appointments);
  }
}
