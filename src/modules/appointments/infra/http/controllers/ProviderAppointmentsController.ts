import { Request, Response } from 'express';
import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class AppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.query;

    const listProviderAppointment = container.resolve(
      ListProviderAppointmentService,
    );

    const appointments = await listProviderAppointment.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id,
    });

    return response.json(appointments);
  }
}
