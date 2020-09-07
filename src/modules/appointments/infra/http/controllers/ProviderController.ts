import { Request, Response } from 'express';
import ListProviderService from '@modules/appointments/services/ListProvidersService';

import { container } from 'tsyringe';

export default class AppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProviderService);

    const appointment = await listProviders.execute({
      user_id,
    });

    return response.json(appointment);
  }
}
